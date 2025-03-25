import React, { useState, useContext } from "react";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { LibraryContext } from "../contexts/libraryContext";
import Loading from "./Loading";
const AddBook = ({setAddBook}) => {
  const {loading, setLoading} = useContext(LibraryContext);
  const [author, setAuthor] = useState(" ");
  const [title, setTitle] = useState(" ");
  const [date, setDate] = useState(" ");
  const [description, setDescription] = useState(" ");
  const [link, setLink] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async () => {
    setLoading(true);
    axios
      .post("https://react-be-9ugr.onrender.com/books/post", {
        title: title,
        author: author,
        publishDate: date,
        description: description,
        coverImage: link,
      })
      .then(() => {
        console.log("Book added successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full h-full z-10 backdrop-blur-sm absolute top-0 left-0 flex justify-center items-start pt-20">
      {loading && <Loading />}

      
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
        className="flex flex-col gap-2 border w-96 p-4 bg-white rounded-lg"
      >
        <h1 className="text-2xl font-bold">Add Book</h1>
        <input
          type="text"
          name=""
          id=""
          placeholder="Title"
          className="p-2 border rounded-lg"
          onInput={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Author"
          className="p-2 border rounded-lg"
          onInput={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          type="date"
          name=""
          id=""
          placeholder="Publish Date"
          className="p-2 border rounded-lg"
          onInput={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="text"
          required
          placeholder="link to image"
          className="p-2 border rounded-lg"
          onInput={(e) => {
            setLink(e.target.value);
          }}
        />
        <textarea
          name=""
          id=""
          placeholder="Description"
          className="p-2 border rounded-lg"
          onInput={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <div className="flex gap-6">
        <button className="bg-gray-500 text-white p-2 rounded-lg w-44" onClick={() => setAddBook(false)}>Cancel</button>
        <button className="bg-black text-white p-2 rounded-lg w-44">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
