import { HomepageProps } from "../types/types";
import FeaturedBook from "./FeaturedBook";
import { books } from "../data/bookObjs";

const Featured = (props: HomepageProps) => {
  return (
    <section id="featured" className="homepage-section">
      <h3 className="section-heading">Featured Titles</h3>
      <section id="featured-box">
        {Object.values(books).map((book) => (
          <FeaturedBook
            key={book.title}
            book={book}
            setActiveBook={props.setActiveBook}
            startListening={props.startListening}
          />
        ))}
      </section>
    </section>
  );
};

export default Featured;
