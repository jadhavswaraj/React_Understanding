import React from "react";
import AddNote from "./components/AddNote";
import NotesList from "./components/NotesList";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1>Notes App</h1>
      <AddNote />
      <NotesList />
    </div>
  );
};

export default App;
