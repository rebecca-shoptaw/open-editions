import { useState } from "react";
import { books } from "../data/bookObjs";
import { BookProps } from "../types/types";

export const useActiveBook = () => {
  const [activeBook, setActiveBook] = useState<BookProps>(
    books["The Count of Monte Cristo"]
  );
  return { activeBook, setActiveBook };
};
