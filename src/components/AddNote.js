import React, { useState, useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

const AddNote = (props) => {
  const { addNote, getNotes } = useContext(NoteContext);
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "default",
  });

  const handle_create = async (e) => {
    e.preventDefault();
    await addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    await getNotes();
    props.showAlert("Note has been added", "success");
  };

  const onChange = (e) => setNote({ ...note, [e.target.name]: e.target.value });

  return (
    <div className="container my-3">
      <h2>Add a note</h2>
      <form onSubmit={handle_create}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={note.title}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={note.description}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            value={note.tag}
            onChange={onChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-outline-success"
          disabled={
            note.title.trim().length < 5 || note.description.trim().length < 5
          }
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
