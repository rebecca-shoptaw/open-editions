import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Helmet } from "react-helmet";

type bookProps = {
  book: {
    title: string;
    author: string;
    pub_year: number;
    url: string;
    cover: string;
    cover_size: string;
    cover_position: string;
    reader: string;
    reader_url: string;
  };
};

const Audiobook = ({ book }: bookProps) => {
  const [iframeLoad, setIframeLoad] = useState(false);
  const [minimal, setMinimal] = useState(false);
  const [infoVis, setInfoVis] = useState(true);

  const portfolio_link = "https://rebecca-shoptaw.github.io/";

  document.body.style.backgroundImage = `url(${book.cover})`;
  document.body.style.backgroundSize = book.cover_size;

  if (book.cover_position) {
    document.body.style.backgroundPosition = book.cover_position;
  } else {
    document.body.style.backgroundPosition = "0% 0%";
  }

  const toggle = (type: string) => {
    switch (type) {
      case "minimal":
        if (minimal) {
          setMinimal(false);
        } else setMinimal(true);
        break;
      case "infoVis":
        if (infoVis) {
          setInfoVis(false);
        } else setInfoVis(true);
        break;
    }
  };

  return (
    <div id="container" className={`${minimal ? "minimal" : ""}`}>
      <Helmet>
        <title>{book.title} | Open Editions</title>
      </Helmet>
      {!iframeLoad && (
        <div id="loading">
          <ClipLoader color={"#ddd"} size={100} />
        </div>
      )}
      <div id="header" className="d-flex flex-row justify-content-between">
        <div id="right">
          <h3 id="book-title">{book.title}</h3>
        </div>
        <div id="header-left">
          <i
            id="info-btn"
            className="bi bi-info-circle"
            title="About"
            onClick={() => toggle("infoVis")}
          />
          <i
            id="minimal-btn"
            className="bi bi-exclude"
            title="Minimal Mode"
            onClick={() => toggle("minimal")}
          />
          <a href={portfolio_link}>
            <i id="close-btn" className="bi bi-x" title="Close" />
          </a>
        </div>
      </div>
      <div id="info-box" className={`${!infoVis && "hidden"}`}>
        <h4 id="book-author">
          {book.author} <br></br> {book.pub_year}
        </h4>
      </div>
      <div
        id="playlist-box"
        className={`d-flex flex-column align-items-center justify-content-center ${
          !iframeLoad ? "unloaded" : ""
        }`}
      >
        <iframe
          id="playlist"
          src={`https://archive.org/embed/${book.url}_librivox&playlist=1`}
          width="500"
          height="400"
          className={`${iframeLoad ? "loaded" : "unloaded"}`}
          onLoad={() => setIframeLoad(true)}
        ></iframe>
        <div
          id="more-info"
          className={`d-flex flex-row justify-content-between ${
            !iframeLoad ? "hidden" : ""
          }`}
        >
          <div>
            Read by{" "}
            <a href={book.reader_url} target="_blank" rel="noreferrer">
              {book.reader}
            </a>{" "}
          </div>
          <div className="right">
            Site design & coding by <br></br>
            <a href={portfolio_link} target="_blank" rel="noreferrer">
              Rebecca Shoptaw
            </a>{" "}
          </div>
        </div>
        {/*<img
          id="footer-logo"
          src="https://cdn-icons-png.flaticon.com/256/864/864685.png"
        />*/}
      </div>
    </div>
  );
};

export default Audiobook;
