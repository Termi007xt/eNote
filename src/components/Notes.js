import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";

const NOtes = () => {
  const context = useContext(NoteContext);
  const { notes, setNotes } = context;
  return (
    <>
      <div className="row my-3">
        <h2>Your notes</h2>
        {notes.map((note) => {
          return <NoteItem note={note} />;
        })}
      </div>
    </>
  );
};

export default NOtes;
