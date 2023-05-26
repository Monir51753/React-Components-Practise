import "./App.css";

import { useState } from "react";
import Note from "./components/Notelist";
import Form from "./components/Form";

function App() {
  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [editmode, setEditmode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);

  return (
    <div className="App">
      <Form
        noteTitle={noteTitle}
        setNoteTitle={setNoteTitle}
        setNotes={setNotes}
        setEditmode={setEditmode}
        setEditableNote={setEditableNote}
        editableNote={editableNote}
        notes={notes}
        editmode={editmode}
      />
      <Note
        setNoteTitle={setNoteTitle}
        notes={notes}
        setNotes={setNotes}
        editableNote={editableNote}
        setEditableNote={setEditableNote}
        setEditmode={setEditmode}
      />
    </div>
  );
}

export default App;
