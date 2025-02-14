import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteNote, editNote } from "../store/notesSlice";
import "./Note.css";

const Note = ({ note }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(note.content);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editNote({ id: note.id, content }));
    setIsEditing(false);
  };

  return (
    <div className="note">
      {isEditing ? (
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      ) : (
        <p>{note.content}</p>
      )}
      <div className="actions">
        {isEditing ? (
          <button onClick={handleEdit}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button onClick={() => dispatch(deleteNote(note.id))}>Delete</button>
      </div>
    </div>
  );
};

export default Note;
