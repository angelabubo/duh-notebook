import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNewNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }

  function submitNote(event) {
    props.onAdd(newNote);
    setNewNote({
      title: "",
      content: "",
    });

    setExpanded(false);

    //Prevents reloading of entire page after form submit
    event.preventDefault();
  }

  //Conditional rendering
  const [isExpanded, setExpanded] = useState(false);
  function handleClick() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note" autocomplete="off">
        <input
          name="title"
          placeholder="Title"
          value={newNote.title}
          onChange={handleChange}
          style={{ display: isExpanded ? "inline" : "none" }}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={newNote.content}
          onChange={handleChange}
          onClick={handleClick}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
