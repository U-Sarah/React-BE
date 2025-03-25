import { createContext, useState } from "react";

export const LibraryContext = createContext();

const LibraryProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [display, setDisplay] = useState("table");
  const [books, setBooks] = useState([]);
  return (
    <LibraryContext.Provider
      value={{ loading, setLoading, display, setDisplay, books, setBooks }}
    >
      {children}
    </LibraryContext.Provider>
  );
};

export default LibraryProvider;
