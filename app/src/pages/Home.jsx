import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { use } from "react";
import AddBook from "./AddBook";
import ViewModal from "../components/ViewModal";
import DeleteModal from "../components/DeleteModal";
import EditModal from "../components/EditModal";
import { FaUser, FaDoorOpen } from "react-icons/fa";
import { LibraryContext } from "../contexts/libraryContext";
import Loading from "../components/Loading";


const Home = () => {
  const [books, setBooks] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState({});
  const [deleteModal, setDeleteModal] = useState(false);
  const [editBook, setEditBook] = useState(false);
  const [profileSettings, setProfileSettings] = useState(false);
  const navigate = useNavigate();

  const {loading, setLoading, setDisplay} = useContext(LibraryContext)

const user = JSON.parse(localStorage.getItem("user"));
const token = user ? user.jwt : null;


  const LogOut = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true)
        const response = await axios.get(
          "http://localhost:3000/books",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setLoading(false)
        setBooks(response.data);
      } catch (error) {
        setLoading(false)
       if(error.response ?. status === 401) {
        navigate("/login")
       } else {
        console.log(error)
       }
      }
      
    };
    fetchBooks();
  }, [deleteModal, editBook]);
  return (
    <div className="p-3">
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
      <div className="flex justify-between items-center">
        <button
          onClick={() => navigate("./AddBook")}
          className="text-1xl p-2 border-2 w-fit text-sky-500 border-sky-300  left-[94.3%] my-3"
        >
          <FaPlus />
        </button>
        <button className="py-1 rounded-lg bg-red-600 text-white " onClick={() => LogOut()}>Log Out</button>
      </div>
      <table className="w-full table-auto border-collapse border-2 border-sky-500 ">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Publish Date</th>
            <th>Menu </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{new Date(book.publishDate).toLocaleDateString()}</td>
                <td className="flex justify-center items-center gap-2 h-full border-none p-2">
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
}

export default Home;
