import Audiobook from "./components/Audiobook";
//import { useState } from "react";

function App() {
  const books = [
    {
      title: "The Count of Monte Cristo",
      author: "Alexandre Dumas",
      pub_year: 1844,
      url: "count_montecristo_1308",
      cover:
        "https://www.museothyssen.org/sites/default/files/styles/full_resolution/public/imagen/obras/1981.55_retrato-david-lyon.jpg",
      cover_size: "150vw",
      cover_position: "0% 0%",
      reader: "David Clarke",
      reader_url: "https://librivox.org/reader/7408",
    },
    {
      title: "Middlemarch",
      author: "George Eliot",
      pub_year: 1871,
      url: "middlemarch_version2_1310",
      cover:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Elizabeth_Winthrop_Chanler.JPG/1200px-Elizabeth_Winthrop_Chanler.JPG",
      cover_size: "100vw",
      cover_position: "0% 30%",
      reader: "Margaret Espaillat",
      reader_url: "https://librivox.org/reader/4064",
    },
    {
      title: "The Red and the Black - Volume 1",
      author: "Stendhal",
      pub_year: 1830,
      url: "red_black_v1_1206",
      cover:
        "https://upload.wikimedia.org/wikipedia/commons/7/76/Eug%C3%A8ne_Delacroix_-_Louis-Auguste_Schwiter.jpg",
      cover_size: "150vw",
      cover_position: "2.6% 0.6%",
      reader: "Various",
      reader_url:
        "https://librivox.org/the-red-and-the-black-volume-i-by-stendhal/",
    },
  ];

  //const [book, selectBook] = useState(books[2]);

  return (
    <div>
      <Audiobook book={books[2]} />
    </div>
  );
}

export default App;
