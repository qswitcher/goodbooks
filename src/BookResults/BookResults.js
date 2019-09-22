import React from "react";
import Book from "../Book/Book";
import books from "../data/books.json";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const BookResults = () => {
  return (
    <Container>
      {books.items.map((book, index) => (
        <Book key={index} book={book} />
      ))}
    </Container>
  );
};

export default BookResults;
