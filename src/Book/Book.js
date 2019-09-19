import React from "react";

const Book = ({ book }) => {
  const title = book.volumeInfo.title;
  const thumbnail = book.volumeInfo.imageLinks.thumbnail;
  return (
    <div>
      <h1>{title}</h1>
      <img src={thumbnail} />
    </div>
  );
};

export default Book;
