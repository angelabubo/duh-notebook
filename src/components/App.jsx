import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "./../notes";

function App() {
  return (
    <div>
      <Header />
      {Notes.map((noteData) => (
        <Note
          key={noteData.key}
          id={noteData.key}
          title={noteData.title}
          content={noteData.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
