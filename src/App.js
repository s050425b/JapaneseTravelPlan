import logo from './logo.svg';
import './App.css';
import { JapanMap } from './Components/JapanMap/JapanMap';
import { NoteSlide } from './Components/NoteSlide/NoteSlide';

function App() {
  return (
    <div className="App">
      <JapanMap />
      <NoteSlide />
    </div>
  );
}

export default App;
