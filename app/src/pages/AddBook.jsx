import React, { useState, useContext } from "react";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { LibraryContext } from "../contexts/libraryContext";
import Loading from "../components/Loading";
const AddBook = () => {
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
      .post("http://localhost:3000/books/post", {
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
    <div className="flex flex-col justify-center items-center p-8">
      {loading && <Loading />}
      <button
        className="self-start px-4 py-1.5 text-2xl bg-sky-500 text-white rounded-lg"
        onClick={() => navigate("/")}
      >
        <FaArrowLeft />
      </button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
        className="flex flex-col gap-2 border w-96 p-4 bg-sky-100"
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="Title"
          className="p-2 "
          onInput={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Author"
          className="p-2"
          onInput={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          type="date"
          name=""
          id=""
          placeholder="Publish Date"
          className="p-2"
          onInput={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="text"
          required
          placeholder="link to image"
          onInput={(e) => {
            setLink(e.target.value);
          }}
        />
        <textarea
          name=""
          id=""
          placeholder="Description"
          className="p-2"
          onInput={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <button>Save</button>
      </form>
    </div>
  );
};

export default AddBook;
