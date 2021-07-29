import { Note } from './components/Note';

function App({ notes }) {
  return (
    <div>
      <h1>Notes</h1>
      {notes.map((note) => {
        return <Note key={note.id} note={note} />;
      })}
    </div>
  );
}

export default App;
