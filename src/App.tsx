import { useState } from "react";
import Audiobook from "./components/Audiobook";
import Homepage from "./components/Homepage";
import bookPresets from "./data/bookObjs";

function App() {
  const [listening, setListening] = useState(true);

  const books = bookPresets;

  return (
    <>
      {!listening && <Homepage />}
      {listening && <Audiobook book={books["The Red and The Black"]} />}
    </>
  );
}

export default App;
