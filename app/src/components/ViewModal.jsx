import React from "react";
import { MdCancel } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

const ViewModal = ({ setModal, selectedBook }) => {
  return (
    <div className="absolute w-full h-full flex  justify-center items-center top-0 left-0 backdrop-blur-sm">
      <div className="border-4 bg-white rounded-lg p-4 relative w-[600px]">
        <div className="flex justify-between items-center p-4">
          <h1 className="flex gap-3">
            <FaBookOpen className="text-2xl"/><span>View Book</span>
          </h1>
          <MdOutlineCancel className="w-6 h-6" onClick={() => setModal(false)}/>
        </div>
        <hr />

        <div className="border flex gap-7 p-5 w-[560px] h-auto mt-4">
          <div className="w-auto mt-5">
            <h1>{`Book Title: ${selectedBook.title}`}</h1><hr className="mb-4" />
            <h1>{`Author: ${selectedBook.author}`}</h1><hr className="mb-4" />
            <h1>{`Publish Date: ${new Date(selectedBook.publishDate).toLocaleDateString()}`}</h1><hr className="mb-4"/>
            <h1>{`Description: ${selectedBook.description}`}</h1><hr />
          </div>
          <hr className="h-full"/>
          <div>
            <img src={selectedBook.coverImage} alt="" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ViewModal;
