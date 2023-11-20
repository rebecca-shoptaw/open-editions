import { useState } from "react";
import Audiobook from "./components/Audiobook";
import Homepage from "./components/Homepage";
import bookPresets from "./data/bookObjs";

function App() {
  const [listening, setListening] = useState(false);

  const books = bookPresets;

  return (
    <>
      <Homepage />
      {listening && <Audiobook book={books.Middlemarch} />}
    </>
  );
}

export default App;
