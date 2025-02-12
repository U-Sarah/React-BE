import React from "react";
import axios from "axios";

const DeleteModal = ({ selectedBook, setDeleteModal }) => {
  const handleDelete = (id) => {
    const token = JSON.parse(localStorage.getItem("user")).token;
    console.log(selectedBook._id);
    axios.delete(`http://localhost:3000/books/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  };
  return (
    <div className="absolute w-full h-full flex justify-center items-center top-0 left-0 backdrop-blur-sm">
      <div className="border-4 relative border-red-500 p-8 flex flex-col gap-4 ">
        <h1 className="text-xl ">{`Are you sure you want to delete "${selectedBook.title}"?`}</h1>
        <div className="flex gap-4 items-center justify-center">
          <button
            className="bg-red-600 px-6 py-2 text-white rounded-lg"
            onClick={() => {
              console.log(selectedBook._id);
              handleDelete(selectedBook._id);
              setDeleteModal(false);
            }}
          >
            Yes
          </button>
          <button
            className="bg-sky-500 px-6 py-2 text-white rounded-lg"
            onClick={() => setDeleteModal(false)}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
