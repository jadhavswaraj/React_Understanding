import React from "react";
import { useSelector } from "react-redux";
import Note from "./Note";
import "./NotesList.css";

const NotesList = () => {
  const notes = useSelector((state) => state.notes.notes);

  return (
    <div className="notes-list">
      {notes.length > 0 ? (
        notes.map((note) => <Note key={note.id} note={note} />)
      ) : (
        <p>No notes available. Start adding some!</p>
      )}
    </div>
  );
};

export default NotesList;
