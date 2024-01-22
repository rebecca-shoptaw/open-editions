import "../styles/css/Homepage.css";
import { useState } from "react";
import Search from "./Search";
import About from "./About";
import Featured from "./Featured";
import Anchor from "./Anchor";
import { HomepageProps } from "../types/types";
import { useScrollTo } from "../hooks/useScrollTo";

const Homepage = (props: HomepageProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { scrollToElement } = useScrollTo();

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    scrollToElement("search-anchor");
  };

  return (
    <section id="hp-body">
      <header id="homepage-header">
        <div id="site-title">
          <h1>Open Editions</h1>
          <h2>A new way to listen.</h2>
        </div>
        <nav id="homepage-nav">
          <input
            id="search-bar"
            value={searchTerm}
            onChange={handleSearchInput}
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
        <Anchor id="search" />
        <Search term={searchTerm} />
        <section id="contact"></section>
      </main>
      <footer id="homepage-footer">
        <section className="homepage-footer-left">
          <p>
            Powered by{" "}
            <a href="https://librivox.org/" target="_blank">
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
    </section>
  );
};

export default Homepage;
