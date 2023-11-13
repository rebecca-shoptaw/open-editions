import Audiobook from "./components/Audiobook";
import bookObjs from "./data/bookObjs";

function App() {
  const books = bookObjs.books;

  return (
    <>
      <Audiobook book={books[2]} />
    </>
  );
}

export default App;
