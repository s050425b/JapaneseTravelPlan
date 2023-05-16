import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { JapanMap } from './Components/JapanMap/JapanMap';
import { NoteSlide } from './Components/NoteSlide/NoteSlide';

function App() {
  const [station, setStation] = useState("Disney"); 

  return (
    <div className="App">
      <JapanMap />
      <NoteSlide station={station}/>
    </div>
  );
}

export default App;
