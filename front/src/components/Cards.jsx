/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import Context from "../context/Context";
import Header from "./Header";

const Cards = () => {
  const { books, getAllBooks } = useContext(Context);
  console.log(books);
  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <>
      <Header />
      <div className="cards">
        {books.map((book) => (
          <div className="card" key={book.id}>
            <img src={book.thumbnailUrl} alt="pic" />
            <h3>{book.title}</h3>
            <p>{book.isbn}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
