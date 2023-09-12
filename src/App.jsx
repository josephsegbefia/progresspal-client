import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/Signup";
import Login from "./components/pages/Login";
import GlobalStyles from "./components/styled/global";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
