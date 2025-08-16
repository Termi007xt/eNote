import React, { useContext } from "react";
import NoteState from "../context/notes/NoteState";
import NoteContext from "../context/notes/NoteContext";

const Home = () => {
  const context = useContext(NoteContext);
  const { notes, setNotes } = context;

  return (
    <>
      <div className="container">
        <h2>Add a note</h2>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <h2>Your notes</h2>
        {notes.map((note) => {
          return note.title;
        })}
      </div>
    </>
  );
};

export default Home;
