import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import { useEffect, useState } from "react";
function App() {
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:5000/notes");
    const data = await res.json();

    setNotes(data);
    setLoading(false);
  };
  useEffect(async () => {
    await getNotes();
  }, []);
  return (
    <div className='App'>
      <Navbar />
      <Form />
      {loading ? (
        <p>loading</p>
      ) : (
        notes.map((note) => (
          <div key={note.id}>
            <h1>{note.title}</h1>
            <p>{note.content}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
