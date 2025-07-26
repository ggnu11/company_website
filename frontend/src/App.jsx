import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
