import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LibraryContext } from "../contexts/libraryContext";
import Loading from "../components/Loading";

const Login = () => {
  const { loading, setLoading } = useContext(LibraryContext);
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
      const response = await axios.post(
        "https://react-be-9ugr.onrender.com/user/login",
        {
          email,
          password,
        }
      );
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
    <div className="grid grid-cols-[1fr_1fr] bg-white gap-0 h-screen w-screen max-xl:block">
      <div className="mt-16">
        <form
          className=" border-black mt-10 m-auto w-[400px]  p-4 gap-5  flex flex-col justify-center items-center rounded-lg"
          onSubmit={async (e) => {
            e.preventDefault();
            await handleLogin(email, password);
          }}
        >
          <img src="/darklogo.png" alt="" />
          <h1 className="text-black text-4xl font-medium">Welcome Back!!</h1>
          <p className="text-black">Please enter your credentials to login</p>
          {loading && <Loading />}
          <input
            type="text"
            className="p-3 w-full border rounded-xl border-black"
            placeholder="Email"
            onInput={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="p-3 w-full border border-black rounded-xl"
            placeholder="Password"
            onInput={(e) => setPassword(e.target.value)}
          />
          <p className="text-black">Forgot Password?</p>
          {error && <p className="text-red-500">{errorMessage}</p>}
          <button className="bg-black font-bold p-3 px-1.5 w-[100%] rounded-2xl text-white focus:outline-none">
            <span>SIGN IN</span>
          
          </button>
          <p className="hidden max-xl:block">New to our platform? <span className="underline " onClick={() => navigate("/signup")}>Sign up now</span></p>
        </form>
      </div>

      <div className="bg-black rounded-[40px_0_0_40px] max-xl:hidden">
        <div className="items-center text-center justify-center flex flex-col h-screen">
          <img src="/whitelogo.png" alt="" height={100} width={100} />
          <div className="text-white">
            <h1 className=" text-6xl mt-5">BookWorm</h1>
            <p>LIBRARY</p>
          </div>

          <h4 className="text-white mt-32">
            New to our platform? Sign up now.
          </h4>

          <button
            className="w-[200px] font-bold p-2 px-1.5 rounded-2xl text-white border-2 border-white focus:outline-none mt-10"
            onClick={() => navigate("/signup")}
          >
            <span>SIGN UP</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
