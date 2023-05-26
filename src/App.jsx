import "./App.css";
import { useState } from "react";

function App() {
  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [editmode, setEditmode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);

  const createHandler = (e) => {
    e.preventDefault();
    if (!noteTitle) {
      return alert("please provide a valid title");
    }
    const newNote = {
      id: Date.now() + "",
      title: noteTitle,
      note: "1",
    };
    setNotes([...notes, newNote]);
    setNoteTitle("");
  };

  const deleteHandler = (id) => {
    const newNotes = notes.filter((item) => item.id !== id);
    setNotes(newNotes);
  };

  const editHandler = (id) => {
    const toBeEditNote = notes.find((item) => item.id === id);

    setEditmode(true);
    setEditableNote(toBeEditNote);
    setNoteTitle(toBeEditNote.title);
  };

  const updateHandler = (e) => {
    e.preventDefault();

    if (!noteTitle) {
      return alert("please provide a valid title");
    }

    const newNotes = notes.map((item) => {
      if (item.id === editableNote.id){
        item.title = noteTitle;
      };

      return (item)
    })

    setNotes(newNotes);
    setEditmode(false); 
    setEditableNote(null);
    setNoteTitle('');
     
  };

  return (
    <div className="App">
      <form onSubmit={(e) => {
        editmode ? updateHandler(e) : createHandler(e);
      }}>
        <input
          value={noteTitle}
          type="text"
          onChange={(event) => setNoteTitle(event.target.value)}
        />
        <button onClick={(e) => {
          editmode ? updateHandler(e) : createHandler(e);
        }} type="submit">
          {editmode ? 'Update Note' : 'Add Note'}
        </button>
      </form>
      <ul>
        {notes.map((item) => (
          <li key={item.id}>
            <span>{item.title}</span>
            <button onClick={() => editHandler(item.id)}>Edit</button>
            <button onClick={() => deleteHandler(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
