import React from "react";

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{note.title} </h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{note.tag}</h6>
          <p className="card-text">{note.description}</p>
          <div className="d-flex justify-content-between">
            <button type="button" class="btn btn-outline-info">
              ✏️
            </button>
            <button type="button" class="btn btn-outline-danger">
              🗑️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
