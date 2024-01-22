import { FeaturedBookProps } from "../types/types";

const FeaturedBook = (props: FeaturedBookProps) => {
  const { book, setActiveBook, startListening } = props;

  const handleSelection = () => {
    setActiveBook(book);
    startListening();
  };

  return (
    <section className="featured-book">
      <img
        src={book.cover}
        className="featured-book-cover"
        onClick={handleSelection}
      />
      <section className="featured-book-credits">
        <p className="featured-book-title" onClick={handleSelection}>
          "{book.title}"
        </p>
        <p className="featured-book-info featured-book-author">{book.author}</p>
        <p className="featured-book-info featured-book-pubyear">
          {book.pub_year}
        </p>
      </section>
      <button className="listen-button" onClick={handleSelection}>
        Listen
      </button>
    </section>
  );
};

export default FeaturedBook;
