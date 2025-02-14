import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    editNote: (state, action) => {
      const { id, content } = action.payload;
      const note = state.notes.find((note) => note.id === id);
      if (note) note.content = content;
    },
  },
});

export const { addNote, deleteNote, editNote } = notesSlice.actions;

export default notesSlice.reducer;
