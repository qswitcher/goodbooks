import React from "react";
import Book from "../Book/Book";
import books from "../data/books.json";

const BookResults = () => {
  return (
    <div>
      {books.map(book => (
        <Book book={book} />
      ))}
    </div>
  );
};

export default BookResults;
