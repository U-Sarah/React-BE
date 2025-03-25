import { useState, useContext, useEffect } from "react";

import { LuPlus } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import BookTable from "./BookTable";
import AddBook from "./AddBook";
import { LibraryContext } from "../contexts/libraryContext";

const Main = () => {
  const [addBook, setAddBook] = useState(false);
  const [search, setSearch] = useState("");
  const { books } = useContext(LibraryContext);
  const [filterBook, setFilterBook] = useState([]);

  useEffect(() => {
    setFilterBook(books);
  }, [books]);


  useEffect(() => {
    if (search && search.length > 0) {
      setFilterBook(
        books.filter((book) =>
          book.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setFilterBook(books)
    }
  }, [search]);

  return (
    <div className="flex flex-col p-4 relative w-screen">
      <div className="flex justify-between max-lg:flex-col max-lg:p-1">
        <h1 className="text-xl font-medium max-lg:pb-2 max-lg:px-2">Book Management</h1>
        <div className="flex gap-2">
          <button
            className="flex gap-3 bg-black rounded-lg text-white px-4 py-2 h-10 w-36"
            onClick={() => setAddBook(true)}
          >
            <LuPlus className="rounded-full  border  mt-1" />{" "}
            <span className="text-sm max-sm:hidden">Add Book</span><span className="hidden max-sm:block">Add</span>
          </button>
          <div className="relative">
            <CiSearch className="absolute left-3 top-5 -translate-y-1/2 transform" />
            <input
              type="text"
              placeholder="Search Books"
              name=""
              id=""
              className="pl-7 pr-4 py-2 rounded-lg focus:outline-none"
              onInput={(e) => {
                setSearch(e.target.value);
              }}
            />
          
            
          </div>
        </div>
      </div>
      {addBook && <AddBook setAddBook={setAddBook} />}
      <BookTable filterBook={filterBook} />
    </div>
  );
};

export default Main;
