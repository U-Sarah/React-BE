import React from "react";
import axios from "axios";
import { FaTrashCan } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";

const DeleteModal = ({ selectedBook, setDeleteModal }) => {
  const handleDelete = (id) => {
    const token = JSON.parse(localStorage.getItem("user")).token;
    console.log(selectedBook._id);
    axios.delete(`https://react-be-9ugr.onrender.com/books/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  };
  return (
    <div className="absolute w-full h-full flex justify-center items-center top-0 left-0 backdrop-blur-sm">
      <div className="border-4 relative p-8 flex flex-col gap-4 bg-white">
        <div className="flex justify-between items-center">
       <h1 className="flex gap-3 text-2xl"><FaTrashCan /><span>Delete Confirmation</span></h1>
        <MdOutlineCancel onClick={() => setDeleteModal(false)} className="w-6 h-6"/>
        </div>
       <hr />
        <h1 className="text-xl text-center p-10 w-96">{`Are you certain you wish to proceed with the deletion of "${selectedBook.title}"?`}</h1>
        <div className="flex gap-4 items-center justify-center">
          <button
            className="bg-black px-6 py-2 text-white rounded-lg"
            onClick={() => {
              console.log(selectedBook._id);
              handleDelete(selectedBook._id);
              setDeleteModal(false);
            }}
          >
            CONFIRM
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
