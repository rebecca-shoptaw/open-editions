import Audiobook from "./components/Audiobook";
import Homepage from "./components/Homepage";
import { useActiveBook } from "./hooks/useActiveBook";
import { useListeningStatus } from "./hooks/useListeningStatus";

function App() {
  const { activeBook, setActiveBook } = useActiveBook();
  const { listening, startListening, stopListening } = useListeningStatus();

  return (
    <>
      {!listening && (
        <Homepage
          setActiveBook={setActiveBook}
          startListening={startListening}
        />
      )}
      {listening && (
        <Audiobook book={activeBook} stopListening={stopListening} />
      )}
    </>
  );
}

export default App;
