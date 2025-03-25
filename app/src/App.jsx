
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/signUp";
import Authwrapper from "./components/Authwrapper";
import LibraryProvider from "./contexts/libraryContext";
const App = () => {
  return (
    <div className="h-screen">
      <LibraryProvider>
       
        <BrowserRouter>
          <Routes>
            <Route element={<Authwrapper />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </LibraryProvider>
    </div>
  );
};

export default App;
