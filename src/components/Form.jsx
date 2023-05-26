import React from "react";

const Form = (props) => {
  const createHandler = (e) => {
    e.preventDefault();
    if (!props.noteTitle) {
      return alert("please provide a valid title");
    }
    const newNote = {
      id: Date.now() + "",
      title: props.noteTitle,
      note: "1",
    };
    props.setNotes([...props.notes, newNote]);
    props.setNoteTitle("");
  };

  const updateHandler = (e) => {
    e.preventDefault();

    if (!props.noteTitle) {
      return alert("please provide a valid title");
    }

    const newNotes = props.notes.map((item) => {
      if (item.id === props.editableNote.id) {
        item.title = props.noteTitle;
      }

      return item;
    });

    props.setNotes(newNotes);
    props.setEditmode(false);
    props.setEditableNote(null);
    props.setNoteTitle("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          props.editmode ? updateHandler(e) : createHandler(e);
        }}
      >
        <input
          value={props.noteTitle}
          type="text"
          onChange={(event) => props.setNoteTitle(event.target.value)}
        />
        <button
          onClick={(e) => {
            props.editmode ? updateHandler(e) : createHandler(e);
          }}
          type="submit"
        >
          {props.editmode ? "Update Note" : "Add Note"}
        </button>
      </form>
    </div>
  );
};

export default Form;
