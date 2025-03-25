import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LibraryContext } from "../contexts/libraryContext";



const SignUp = () => {
  const { Loading, setLoading } = useContext(LibraryContext);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // ✅ Define errorMessage state

  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
      setError(true);
      setErrorMessage("All fields are required!");
      return;
    }

    setLoading(true);
    setError(false);

    try {
      const response = await axios.post("https://react-be-9ugr.onrender.com/user/signup", {
        username,
        email,
        password,
      });

      // ✅ Save user data
      localStorage.setItem("user", JSON.stringify(response.data));
      localStorage.setItem("username", JSON.stringify({ username }));

      navigate("/");
    } catch (error) {
      setError(true);
      setErrorMessage(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false); // ✅ Ensure loading stops after request
    }
  };

  return (
    <div className="grid grid-cols-[1fr_1fr] bg-white gap-0 max-xl:block h-screen w-screen">
      <div className="bg-black rounded-[0_40px_40px_0] max-xl:hidden">
        <div className="items-center text-center justify-center flex flex-col h-screen">
          <img src="/whitelogo.png" alt="" height={100} width={100} />
          <div className="text-white">
            <h1 className="text-6xl mt-5">BookWorm</h1>
            <p>LIBRARY</p>
          </div>
          <h4 className="text-white mt-32">Already have an account? Sign in now.</h4>
          <button
            className="w-[200px] font-bold p-2 px-1.5 rounded-2xl text-white border-2 border-white focus:outline-none mt-10"
            onClick={() => navigate("/login")}
          >
            SIGN IN
          </button>
        </div>
      </div>

      <div className="h-screen">
        <form
          className="w-[400px] mt-10 m-auto p-4 gap-5 flex flex-col justify-center items-center rounded-lg"
          onSubmit={(e) => {
            e.preventDefault();
            handleSignUp();
          }}
        >
          {Loading && <Loading />}
          <div className="flex gap-2 items-center justify-center">
            <h1 className="text-4xl font-medium">Sign Up</h1>
            <img src="/darklogo.png" alt="" />
          </div>
          <p className="text-black mt-6 mb-6">Please provide your information to sign up.</p>

          <input
            type="text"
            className="p-3 w-full border border-black rounded-xl"
            placeholder="Username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="email"
            className="p-3 w-full border border-black rounded-xl"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="p-3 w-full border border-black rounded-xl"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-500">{errorMessage}</p>} {/* ✅ Show error message */}

          <button className="bg-black p-2 px-1.5 w-[260px] rounded-lg text-white focus:outline-none">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;


// const SignUp = () => {
//   const { Loading, setLoading } = useContext(LibraryContext);
//   const [username, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(false);

//   const navigate = useNavigate();

//   const handleSignUp = async (username, email, password) => {
//     setLoading(true);
//     setError(false);
//     try {
//       const response = await axios.post(
//         "https://react-be-9ugr.onrender.com/user/signup",
//         {
//           username: username,
//           email,
//           password,
//         }
//       );
//       navigate("/");
//       localStorage.setItem("user", JSON.stringify(response.data));
//       setLoading(false);
//     } catch (error) {
//       setError(true);
//       if (error.response) {
//         setErrorMessage(error.response.data.message);
//       } else {
//         setErrorMessage("Something went wrong");
//       }
//       if(username.trim() === "") return
//     }
//     const user = {username}
//     localStorage.setItem("username", JSON.stringify(user))

//     // navigate("/");
//   };

//   return (
//     <div className="grid grid-cols-[1fr_1fr] bg-white gap-0 max-xl:block h-screen w-screen">
//       <div className="bg-black rounded-[0_40px_40px_0] max-xl:hidden ">
//         <div className="items-center text-center justify-center flex flex-col h-screen">
//           <img src="/whitelogo.png" alt="" height={100} width={100} />
//           <div className="text-white">
//             <h1 className=" text-6xl mt-5">BookWorm</h1>
//             <p>LIBRARY</p>
//           </div>

//           <h4 className="text-white mt-32">
//             Already have an account? Sign in now.
//           </h4>

//           <button
//             className="w-[200px] font-bold p-2 px-1.5 rounded-2xl text-white border-2 border-white focus:outline-none mt-10"
//             onClick={() => navigate("/login")}
//           >
//             <span>SIGN IN</span>
//           </button>
//         </div>
//       </div>
//       <div className="h-screen">
//         <form
//           className="w-[400px] mt-10 m-auto p-4 gap-5  flex flex-col justify-center items-center rounded-lg "
//           onSubmit={(e) => {
//             e.preventDefault();
//             handleSignUp(username, email, password);
//           }}
//         >
//           {Loading && <Loading />}
//           <div className="flex gap-2 items-center justify-center">
//             <h1 className="text-4xl font-medium">Sign Up</h1>
//             <img src="/darklogo.png" alt="" />
//           </div>
//           <p className="text-black mt-6 mb-6">
//             Please provide your information to sign up.
//           </p>
          
//             <input
//               type="text"
//               className="p-3 w-full border border-black rounded-xl"
//               placeholder="Username"
//               onInput={(e) => setUserName(e.target.value)}
//             />
//             <input
//               type="text"
//               className="p-3 w-full border border-black rounded-xl"
//               placeholder="Email"
//               onInput={(e) => setEmail(e.target.value)}
//             />
//             <input
//               type="password"
//               className="p-3 w-full border border-black rounded-xl"
//               placeholder="Password"
//               onInput={(e) => setPassword(e.target.value)}
//             />
          
//           <button className="bg-black p-2 px-1.5 w-[260px] rounded-lg text-white focus:outline-none" onClick={()=> navigate("/")}>
//             <span>Sign Up</span>
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
