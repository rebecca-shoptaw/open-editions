import { useScrollTo } from "../hooks/useScrollTo";

const Search = ({ term }: { term: string }) => {
  /*const getResults = (searchTerm: string) => {
    axios
      .get(`https://librivox.org/api/feed/audiobooks/title/^${searchTerm}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };*/

  const { resetUrl } = useScrollTo();

  return (
    <section id="search" className="homepage-section">
      <h3 className="section-heading">Search</h3>
      <p className="section-text">
        <span className="important-section-text">
          Our search page is under construction at the moment
          {term && (
            <span>, but soon you'll be able to search for "{term}"</span>
          )}
          .
        </span>
        <br></br>
        In the meantime, feel free to check out our{" "}
        <a href="#featured-anchor" onClick={resetUrl}>
          featured titles
        </a>
        .
      </p>
    </section>
  );
};

export default Search;
