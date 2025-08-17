import React, { useState, useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

const AddNote = (props) => {
  const context = useContext(NoteContext);
  const { addNote, getNotes } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handle_create = async (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    await getNotes();
    props.showAlert("Note has been added", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container my-3">
        <h2>Add a note</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
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
              onChange={onChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-outline-success"
            onClick={handle_create}
          >
            Create
          </button>
        </form>
      </div>
    </>
  );
};

export default AddNote;
