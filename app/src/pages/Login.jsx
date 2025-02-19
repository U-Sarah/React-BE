import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IoIosReturnLeft } from "react-icons/io";
import { LibraryContext } from "../contexts/libraryContext";
import Loading from "../components/Loading";


const Login = () => {
  const {loading, setLoading} = useContext(LibraryContext)
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);

  const navigate = useNavigate();


  const handleLogin = async (email, password) => {
    setError(false);
    setLoading(true);
    setErrorMessage("");
    try {
     const response = await axios.post("http://localhost:3000/user/login", {
        email,
        password,
      });
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/");
    } catch (error) {
      setError(true);
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Something went wrong");
      }
    }
  };

  return (
    <div className="p-6">
      <form
        className="shadow-[0px_6px_37px_0px_rgba(0,_0,_0,_0.1)] border w-[330px] mt-10 m-auto p-4 gap-5  flex flex-col justify-center items-center rounded-lg"
        onSubmit={async (e) => {
          e.preventDefault();
          await handleLogin(email, password);
        }}
      >
        <h1 className="text-2xl font-bold">Log In</h1>

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
        {error && <p className="text-red-500">{errorMessage}</p>}
        <button className="bg-sky-500 p-2 px-1.5 w-6/12 rounded-lg text-white focus:outline-none hover:bg-sky-600">
          <span>Log In</span>
        </button>
        {loading && <Loading />}
        <p
          className="hover:text-sky-500 cursor-pointer"
          onClick={() => navigate("/signup")}
        >
          Don&apos;t have an account?
        </p>
      </form>
    </div>
  );
};

export default Login;
