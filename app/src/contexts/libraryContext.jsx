import { createContext, useState } from "react";

export const LibraryContext = createContext();

const LibraryProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [display, setDisplay] = useState("table");
  return (
    <LibraryContext.Provider
      value={{ loading, setLoading, display, setDisplay }}
    >
      {children}
    </LibraryContext.Provider>
  );
};

export default LibraryProvider;
