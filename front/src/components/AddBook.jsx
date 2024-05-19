import "../style/addbook.css";
import { useRef } from "react";
import { useContext } from "react";
import Context from "../context/Context";

const AddBook = () => {
  const { addBook, books } = useContext(Context);
  const titleRef = useRef();
  const authorsRef = useRef();
  const isbnRef = useRef();
  const pagesCountRef = useRef();
  const categoriesRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: books[books.length - 1].id + 1,
      title: titleRef.current.value,
      authors: authorsRef.current.value
        .split(" ")
        .map((author) => author.trim()), // Split and trim authors
      isbn: isbnRef.current.value,
      pagesCount: pagesCountRef.current.value,
      categories: categoriesRef.current.value
        .split(" ")
        .map((category) => category.trim()), // Split and trim categories
      thumbnailUrl:
        "https://webneel.com/sites/default/files/images/download/thumb/old-book-with-blank-cover%201_0.jpg",
    };
    console.log(newBook);
    addBook(newBook);
    // Here you would typically send newBook to the server

    // Clear the input fields
    titleRef.current.value = "";
    authorsRef.current.value = "";
    isbnRef.current.value = "";
    pagesCountRef.current.value = "";
    categoriesRef.current.value = "";
  };

  return (
    <div className="body">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" ref={titleRef} required />
        </div>
        <div>
          <label htmlFor="authors">Authors:</label>
          <input
            type="text"
            id="authors"
            ref={authorsRef}
            required
            placeholder="seperated by spaces"
          />
        </div>
        <div>
          <label htmlFor="isbn">ISBN:</label>
          <input type="text" id="isbn" ref={isbnRef} required />
        </div>
        <div>
          <label htmlFor="pagesCount">Pages Count:</label>
          <input type="number" id="pagesCount" ref={pagesCountRef} required />
        </div>
        <div>
          <label htmlFor="categories">Categories:</label>
          <input
            type="text"
            id="categories"
            ref={categoriesRef}
            required
            placeholder="seperated by spaces"
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
