import Search from "./Search";
import "../styles/css/Homepage.css";
import { useState } from "react";

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <header>
        <div id="site-title">
          <h1>Open Editions</h1>
          <h2>A new way to listen.</h2>
        </div>
        <nav>
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
      <main>
        <section id="about">Who we are</section>
        <section id="search">
          <Search term={searchTerm} />
        </section>
        <section id="contact"></section>
      </main>
    </>
  );
};

export default Homepage;
