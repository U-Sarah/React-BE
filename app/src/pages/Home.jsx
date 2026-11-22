import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


import { LibraryContext } from "../contexts/libraryContext";

import SideBar from "../components/SideBar";
import Header from "../components/Header";
import Main from "../components/Main";

const Home = () => {
  
  const [deleteModal, setDeleteModal] = useState(false);
  const [editBook, setEditBook] = useState(false);
  const navigate = useNavigate();

  const {  setLoading, setDisplay,setBooks } = useContext(LibraryContext);

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


