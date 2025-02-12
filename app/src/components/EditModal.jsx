import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdCancel } from "react-icons/md";



const EditModal = ({ setEditBook, selectedBook }) => {
  const [author, setAuthor] = useState(selectedBook.author);
  const [title, setTitle] = useState(selectedBook.title);
  const [date, setDate] = useState(selectedBook.publishDate);
  const [description, setDescription] = useState(selectedBook.descriptiom);
  const [link, setLink] = useState("");
  const [newselectedBook, setNewselectedBook] = useState({});

  const handleUpdate = async () => {
    const token = JSON.parse(localStorage.getItem("user")).token;
    const id = selectedBook._id;
    axios.put(`http://localhost:3000/books/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }, newselectedBook);
  };

  useEffect(() => {
    setNewselectedBook({
      title: title,
      author: author,
      publishDate: date,
      coverImage: link,
      description: description,
    });
  }, [title, author, date, description, link]);

  return (
    <div className="w-full h-full z-10 backdrop-blur-sm absolute top-0 left-0 flex justify-center items-start pt-20">
      <div className="p-8 relative">
        <button
          className="text-red-500 text-3xl absolute top-0 right-0"
          onClick={() => {
            setEditBook(false);
          }}
        >
          <MdCancel />{" "}
        </button>
        <h1>Edit selectedBook</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleUpdate();
            setEditBook(false)

          }}
          className="flex flex-col gap-2 border w-96 p-4 bg-sky-100"
        >
          <input
            type="text"
            name=""
            id=""
            placeholder="Title"
            className="p-2 "
            value={title}
            onInput={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            name=""
            id=""
            value={author}
            placeholder="Author"
            className="p-2"
            onInput={(e) => setAuthor(e.target.value)}
            required
          />
          <input
            type="date"
            name=""
            id=""
            value={date}
            placeholder="Publish Date"
            className="p-2"
            onInput={(e) => setDate(e.target.value)}
            required
          />
          <input
            type="text"
            required
            placeholder="link to image"
            value={link}
            onInput={(e) => {
              setLink(e.target.value);
            }}
          />
          <textarea
            name=""
            id=""
            valie={description}
            placeholder="Description"
            className="p-2"
            onInput={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          <button>Save</button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
