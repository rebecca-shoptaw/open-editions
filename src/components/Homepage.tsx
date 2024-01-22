import "../styles/css/Homepage.css";
import { useState } from "react";
import { Helmet } from "react-helmet";
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

  const handleClearInput = () => {
    let search = document.getElementById("search-bar") as HTMLInputElement;
    if (search) search.value = "";
    search.focus();
    setSearchTerm("");
  };

  return (
    <section id="hp-body">
      <Helmet>
        <title>Open Editions | A new way to listen.</title>
      </Helmet>
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
          <i className="bi bi-x-lg" onClick={handleClearInput} />
          <i
            className="bi bi-search"
            onClick={() => scrollToElement("search-anchor")}
          />
        </nav>
      </header>
      <main id="homepage-main">
        <section id="banner">
          <section id="banner-content">
            <h3>A new way to listen.</h3>
            <button
              className="listen-button"
              onClick={() => scrollToElement("about-anchor")}
            >
              Begin
            </button>
          </section>
        </section>
        <Anchor id="about" />
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
