import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  //Get all notes
  const getNotes = async () => {
    //API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg5YTJkNDIzZDcyZGUwNDUwY2ZjZDhhIn0sImlhdCI6MTc1NDkzNTQ4Mn0.Od2yjGZcWCLCixteNFT4gQH9MUOmuze7pIkZpw0JEbQ",
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  //Add notes
  const addNote = async (title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg5YTJkNDIzZDcyZGUwNDUwY2ZjZDhhIn0sImlhdCI6MTc1NDkzNTQ4Mn0.Od2yjGZcWCLCixteNFT4gQH9MUOmuze7pIkZpw0JEbQ",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const note = {
      _id: "68a088d6csdf12c9556972e0c72",
      user: "689a2d423d72de0450cfcd8a",
      title: title,
      description: description,
      tag: tag,
      date: "2025-08-16T13:34:14.721Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //Edit note
  const editNote = async (id, title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg5YTJkNDIzZDcyZGUwNDUwY2ZjZDhhIn0sImlhdCI6MTc1NDkzNTQ4Mn0.Od2yjGZcWCLCixteNFT4gQH9MUOmuze7pIkZpw0JEbQ",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    //Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  //Delete note
  const deleteNote = async (id) => {
    // API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg5YTJkNDIzZDcyZGUwNDUwY2ZjZDhhIn0sImlhdCI6MTc1NDkzNTQ4Mn0.Od2yjGZcWCLCixteNFT4gQH9MUOmuze7pIkZpw0JEbQ",
      },
      body: JSON.stringify({ id }),
    });
    const json = response.json();

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, getNotes, addNote, editNote, deleteNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
