import React, { useState } from "react";

const NoteItem = (props) => {
  const note_edit = () => {
    props.showAlert("Note has been edited", "success");
  };

  const note_delete = () => {
    props.showAlert("Note has been deleted", "danger");
  };
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{note.title} </h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{note.tag}</h6>
          <p className="card-text">{note.description}</p>
          <div className="d-flex justify-content-between">
            <i className="fa-solid fa-pencil" onClick={note_edit}></i>
            <i className="fa-solid fa-trash-can" onClick={note_delete}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
