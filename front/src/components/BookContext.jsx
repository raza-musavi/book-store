/* eslint-disable react/prop-types */
import { useState } from "react";
import Context from "./Context";

const BookContext = (props) => {
  const host = "http://localhost:3000";
  const booksinit = [
    {
      id: 1,
      title: "Harry Potter",
    },
  ];
  const [books, setBooks] = useState(booksinit);
  const [allBooks, setAllBooks] = useState(booksinit); // state to store the original list

  const getAllBooks = async () => {
    const res = await fetch(`${host}/books`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setBooks(data);
    setAllBooks(data);
  };

  // get specific book by id
  const getBook = async (id) => {
    const res = await fetch(`${host}/books/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  };

  // search
  const searchBook = (term) => {
    if (term === "") {
      setBooks(allBooks); // reset to original list when search term is empty
    } else {
      const filteredData = allBooks.filter((book) => {
        const { title } = book;
        return title.toLowerCase().includes(term.toLowerCase());
      });
      setBooks(filteredData);
    }
  };

  return (
    <Context.Provider value={{ books, getAllBooks, getBook, searchBook }}>
      {props.children}
    </Context.Provider>
  );
};

export default BookContext;
