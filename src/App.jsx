import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
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
      </Routes>
    </div>
  );
}

export default App;
