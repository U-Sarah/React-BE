import React, { useState, useContext } from "react";
import { FaEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import ViewModal from "../components/ViewModal";
import DeleteModal from "../components/DeleteModal";
import EditModal from "../components/EditModal";
import Loading from "../components/Loading";
import { LibraryContext } from "../contexts/libraryContext";
import { BsThreeDots } from "react-icons/bs";

const BookTable = ({ filterBook }) => {
  const [selectedBook, setSelectedBook] = useState({});
  const [modal, setModal] = useState(false);
  const [editBook, setEditBook] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { loading } = useContext(LibraryContext);
 
  return (
    <div className="bg-white rounded-lg p-4 mt-3 max-lg:border">
      {modal && <ViewModal setModal={setModal} selectedBook={selectedBook} />}
      {deleteModal && (
        <DeleteModal
          selectedBook={selectedBook}
          setDeleteModal={setDeleteModal}
        />
      )}
      {editBook && (
        <EditModal selectedBook={selectedBook} setEditBook={setEditBook} />
      )}
      {loading && <Loading />}

      <table className="w-full table-auto text-center">
        <thead>
          <tr className="max-sm:border-b-2">
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th className="max-sm:hidden">Publish Date</th>
            <th>Menu </th>
          </tr>
        </thead>

        <tbody className="">
          {filterBook.map((book, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td className="max-sm:hidden">
                  {new Date(book.publishDate).toLocaleDateString()}
                </td>
                <td
                  className="text-center hidden max-sm:flex justify-center items-center h-full mt-2 relative"
                  onClick={() => {
                    setShowMenu(true);
                  }}
                >
                  <BsThreeDots />
                  <div className="absolute border bg-red-500 p-4" onBlur={() => setShowMenu(false)}></div>
                </td>
                <td className="flex justify-center items-center gap-2 h-full border-none p-2 max-sm:hidden">
                  <FaEye
                    className="text-green-500"
                    onClick={() => {
                      setModal(true);
                      setSelectedBook(book);
                    }}
                  />
                  <FaPen
                    className="text-yellow-500"
                    onClick={() => {
                      setEditBook(true);
                      setSelectedBook(book);
                    }}
                  />
                  <FaTrashAlt
                    className="text-red-500"
                    onClick={() => {
                      setDeleteModal(true);
                      setSelectedBook(book);
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;
