import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import GlobalStyles from "./components/styled/global";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
