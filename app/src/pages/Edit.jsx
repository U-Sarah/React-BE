// import React, { useState } from "react";

// const Edit = ({ selectedBook, setEditBook, updateBook }) => {
//   const [editedBook, setEditedBook] = useState({
//     title: selectedBook.title,
//     author: selectedBook.author,
//     publishDate: selectedBook.publishDate,
//     description: selectedBook.description,
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     updateBook(selectedBook._id, editedBook);
//     setEditBook(false);
//   };

//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     setEditedBook({ ...editedBook, [name]: value });
//   };
//   return (
//     <div className="absolute w-full h-full flex justify-center items-center top-0 left-0 backdrop-blur-sm">
//       <div className="border-4 border-sky-500 p-8 relative">
//         <h1>Edit Book</h1>
//         <form className="flex flex-col gap-4">
//           <input
//             type="text"
//             name="title"
//             value={editedBook.title}
//             onChange={handleInput}
//             placeholder="Title"
//             className="border p-2"
//           />
//           <input
//             type="text"
//             name="author"
//             value={editedBook.author}
//             onChange={handleInput}
//             placeholder="Author"
//             className="border p-2"
//           />
//           <input
//             type="text"
//             name="publishDate"
//             value={new Date(editedBook.publishDate).toLocaleDateString()}
//             onChange={handleInput}
//             className="border p-2"
//           />
//           <textarea
//             type="text"
//             name="description"
//             value={editedBook.description}
//             onChange={handleInput}
//             placeholder="Description"
//             className="border p-2"
//           />
//         </form>
//         <div className="flex gap-4 mt-4">
//           <button
//             className="bg-yellow-500 px-6 py-2 text-white rounded-lg"
//             onClick={handleSubmit}
//           >
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Edit;
