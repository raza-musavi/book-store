import "./App.css";
import Header from "./components/Header";
import BookContext from "./components/BookContext";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <BookContext>
        <Header />
        <Cards />
      </BookContext>
    </>
  );
}

export default App;
