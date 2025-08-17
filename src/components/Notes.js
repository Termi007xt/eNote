import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import EditModal from "./Edit_Modal";

const NOtes = (props) => {
  const { notes, getNotes } = useContext(NoteContext);

  const [selectedNote, setSelectedNote] = useState({
    _id: "",
    title: "",
    description: "",
    tag: "",
  });

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null);

  const updateNote = (currentNote) => {
    setSelectedNote(currentNote); // set first so the modal shows the data
    ref.current?.click(); // then open modal
  };

  return (
    <>
      <AddNote showAlert={props.showAlert} />
      <EditModal
        ref={ref}
        note={selectedNote}
        setNote={setSelectedNote}
        showAlert={props.showAlert}
      />
      <div className="row my-3">
        <h2>Your notes</h2>
        <div className="container">
          {notes.length === 0 && "No Notes to display"}
        </div>
        {notes.map((note) => (
          <NoteItem
            key={note._id}
            note={note}
            updateNote={updateNote}
            showAlert={props.showAlert}
          />
        ))}
      </div>
    </>
  );
};

export default NOtes;
