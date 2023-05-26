
import React from "react";

const Note = (props) => {
  const { notes, setNotes, setEditmode, setEditableNote, setNoteTitle } = props;
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

  return (
    <div>
      <ul>
        {notes.map((item) => (
          <li key={item.id} className="list-style">
            <span>{item.title}</span>
            <button onClick={() => editHandler(item.id)}>Edit</button>
            <button onClick={() => deleteHandler(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Note;
