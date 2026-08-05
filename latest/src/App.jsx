import "./App.css";
import Navbar from "./Navbar/Navbar";
import Body from "./Body";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Body/>
      <Routes>

      </Routes>
    </Router>
    </>
  );
}

export default App;
