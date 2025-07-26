import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Footer />
    </Router>
  );
}

export default App;
