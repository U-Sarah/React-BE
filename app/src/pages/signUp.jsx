import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LibraryContext } from "../contexts/libraryContext";
import Loading from "../components/Loading";



const SignUp = () => {
  const {Loading, setLoading} = useContext(LibraryContext)
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

   const navigate = useNavigate();

  const handleSignUp = async (username, email, password) => {
    setLoading(true)
    setError(false)
   try {
    const response = await  axios.post("https://react-be-9ugr.onrender.com/user/signup", {
      username: username,
      email,
      password,
    });
    localStorage.setItem("user", JSON.stringify(response.data))
    setLoading(false)
    navigate("/")
   } catch (error) {
    setError(true)
    if(error.response) {
      setErrorMessage(error.response.data.message)
    } else {
      setErrorMessage("Something went wrong")
    }
   }
  };

  return (
    <div className="p-6">
      <form
        className="shadow-[0px_6px_37px_0px_rgba(0,_0,_0,_0.1)] border w-[330px] mt-10 m-auto p-4 gap-5  flex flex-col justify-center items-center rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          handleSignUp(username, email, password);
        }}
      >
        {Loading && <Loading />}

        <h1 className="text-2xl font-bold">Create Account</h1>
        <input
          type="text"
          className="p-3 w-full border-2 rounded-lg"
          placeholder="Username"
          onInput={(e) => setUserName(e.target.value)}
        />
        <input
          type="text"
          className="p-3 w-full border-2 rounded-lg"
          placeholder="Email"
          onInput={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="p-3 w-full border-2 rounded-lg"
          placeholder="Password"
          onInput={(e) => setPassword(e.target.value)}
        />
        <button className="bg-sky-500 p-2 px-1.5 w-6/12 rounded-lg text-white focus:outline-none hover:bg-sky-600">
          <span>Sign Up</span>
        </button>
      </form>
    </div>
  );
};

export default SignUp;
