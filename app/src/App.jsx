import React from "react";
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import Login from "./pages/Login"
import SignUp from "./pages/signUp";
import Authwrapper from "./components/Authwrapper";
const App = () => {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route element={<Authwrapper />}>
            <Route path="/addbook" element={<AddBook />} />
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
