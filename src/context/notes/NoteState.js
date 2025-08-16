import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "689e262a528e3f27a421e038",
      user: "689a2d423d72de0450cfcd8a",
      title: "First Note",
      description: "First hackathon cleared",
      tag: "hackathon",
      date: "2025-08-14T18:08:42.355Z",
      __v: 0,
    },
    {
      _id: "68a088a5c12c9556972e0c6f",
      user: "689a2d423d72de0450cfcd8a",
      title: "Create eNote",
      description: "By the power of Thor",
      tag: "Asgard",
      date: "2025-08-16T13:33:25.168Z",
      __v: 0,
    },
    {
      _id: "68a088d6c12c9556972e0c71",
      user: "689a2d423d72de0450cfcd8a",
      title: "More notes",
      description: "Music collection de Ragnorok",
      tag: "9realms",
      date: "2025-08-16T13:34:14.721Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
