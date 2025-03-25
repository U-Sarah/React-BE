import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { use } from "react";
import AddBook from "../components/AddBook";
import ViewModal from "../components/ViewModal";
import DeleteModal from "../components/DeleteModal";
import EditModal from "../components/EditModal";
import { FaUser, FaDoorOpen } from "react-icons/fa";
import { LibraryContext } from "../contexts/libraryContext";
import Loading from "../components/Loading";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import Main from "../components/Main";

const Home = () => {
  const [modal, setModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState({});
  const [deleteModal, setDeleteModal] = useState(false);
  const [editBook, setEditBook] = useState(false);
  const [profileSettings, setProfileSettings] = useState(false);
  const navigate = useNavigate();

  const { loading, setLoading, setDisplay,setBooks } = useContext(LibraryContext);

  const user = JSON.parse(localStorage.getItem("user"));
  const token = user ? user.jwt : null;

  const LogOut = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://react-be-9ugr.onrender.com/books",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setLoading(false);
        setBooks(response.data);
      } catch (error) {
        setLoading(false);
        if (error.response?.status === 401) {
          navigate("/login");
        } else {
          console.log(error);
        }
      }
    };
    fetchBooks();
  }, [deleteModal, editBook]);
  return (
    <div className="grid grid-cols-[auto_1fr]  bg-gray-200 max-lg:block">
      <SideBar />
      <div className="grid grid-rows-[auto_1fr]">
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default Home;


