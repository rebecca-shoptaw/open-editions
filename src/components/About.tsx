import { useScrollTo } from "../hooks/useScrollTo";

const About = () => {
  const {scrollToElement} = useScrollTo();

  return (
    <section id="about" className="homepage-section">
      <h3 className="section-heading">Who We Are</h3>
      <section className="section-text about-section-text">
        <p className="important-section-text">
          Welcome to Open Editions: the audiobook site for physical book
          readers.{" "}
        </p>
        <p>
          Our audiobook interface is designed to mimic the feeling of reading a
          physical book, with features like:
        </p>
        <ul id="features-list" className="list-group feature-item">
          <li className="list-group-item feature-item">
            <h5 className="feature-title">Book Themes</h5>
            Listen to each book on its own customized & themed listen page, the
            audiobook equivalent of reading a particular book edition
          </li>
          <li className="list-group-item feature-item">
            <h5 className="feature-title">Minimal Mode</h5>
            Hide all unnecessary text and controls and focus on the book at hand
          </li>
        </ul>
        <p>
          All of our books are in the public domain and come from the amazing{" "}
          <a href="https://librivox.org/">Librivox</a> collection of open-source
          audiobooks, hosted via <a href="https://librivox.org/">Archive.org</a>
          .{" "}
        </p>
        <p>
          We are currently adding to our featured collection, and working on the
          search page, which will allow access to the whole Librivox catalog.
        </p>
        <button
          className="listen-button"
          onClick={() => scrollToElement("featured-anchor")}
        >
          Start Listening
        </button>
      </section>
    </section>
  );
};

export default About;
