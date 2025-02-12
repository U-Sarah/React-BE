import React from 'react'
import { MdCancel } from "react-icons/md";

const ViewModal = ( {setModal, selectedBook}) => {
  return (
    <div className='absolute w-full h-full flex justify-center items-center top-0 left-0 backdrop-blur-sm'>
      <div className='border-4 border-sky-500 p-8 relative '>
        <button className='text-red-500 absolute top-0 right-0 text-2xl'  onClick={() => setModal(false)}><MdCancel /></button>
        <div>
            <img src={selectedBook.coverImage} />
            <h1>{selectedBook.title}</h1>
            <h1>{selectedBook.author}</h1>
            <h1>{new Date(selectedBook.publishDate).toLocaleDateString()}</h1>
            <h1>{selectedBook.description}</h1>
        </div>
      </div>
    </div>
  )
}

export default ViewModal
