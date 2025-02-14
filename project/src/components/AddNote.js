import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../store/notesSlice";
import "./AddNote.css";

const AddNote = () => {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleAddNote = () => {
    if (content.trim()) {
      dispatch(addNote({ id: Date.now(), content }));
      setContent("");
    }
  };

  return (
    <div className="add-note">
      <textarea
        placeholder="Write your note here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
};

export default AddNote;
