import "../styles/css/Homepage.css";
import { useState } from "react";
import Search from "./Search";
import About from "./About";
import Featured from "./Featured";
import Anchor from "./Anchor";
import { HomepageProps } from "../types/types";

const Homepage = (props: HomepageProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  document.body.style.backgroundImage = `url(./OpenEditions_Homepage.jpg)`;
  document.body.style.backgroundPosition = `5% 100%`;
  document.body.style.backgroundSize = "100%";

  return (
    <>
      <header id="homepage-header">
        <div id="site-title">
          <h1>Open Editions</h1>
          <h2>A new way to listen.</h2>
        </div>
        <nav id="homepage-nav">
          <input
            id="search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a book..."
            autoFocus
          />
          <i className="bi bi-search" />
        </nav>
      </header>
      <main id="homepage-main">
        <About />
        <Anchor id="featured" />
        <Featured {...props} />
        <Search term={searchTerm} />
        <section id="contact"></section>
      </main>
      <footer id="homepage-footer">
        <section className="homepage-footer-left">
          <p>
            Powered by{" "}
            <a
              href="https://librivox.org/"
              target="_blank"
            >
              Librivox
            </a>
            .
          </p>
        </section>
        <section className="homepage-footer-right">
          <p>Site design and coding by</p>
          <a
            id="homepage-portfolio-link"
            href="https://rebeccashoptaw.dev/"
            target="_blank"
          >
            Rebecca Shoptaw
          </a>
        </section>
      </footer>
    </>
  );
};

export default Homepage;
