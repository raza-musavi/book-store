import "./App.css";
import BookContext from "../src/context/BookContext";
import Cards from "./components/Cards";
import AddBook from "./components/AddBook";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BookContext>
        <Router>
          <Routes>
            <Route path="/" element={<Cards />} />
            <Route path="/add" element={<AddBook />} />
          </Routes>
        </Router>
      </BookContext>
    </>
  );
}

export default App;
