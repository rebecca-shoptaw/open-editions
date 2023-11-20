import axios from "axios";
import { useState } from "react";

const Search = ({ term }) => {
  const [results, setResults] = useState("");

  const getResults = (searchTerm: string) => {
    axios
      .get(`https://librivox.org/api/feed/audiobooks/title/^${searchTerm}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  getResults(term);
  return <>{term}</>;
};

export default Search;
