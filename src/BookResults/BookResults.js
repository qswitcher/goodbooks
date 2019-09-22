import React from "react";
import Book from "../Book/Book";
import styled from "styled-components";
import { useStateValue } from "../contexts/BookResults";

const Container = styled.div``;

const BookResults = () => {
  const [{ books, loading }] = useStateValue();
  if (loading) {
    return <Container>loading...</Container>;
  }
  return (
    <Container>
      {!loading && books.map((book, index) => <Book key={index} book={book} />)}
    </Container>
  );
};

export default BookResults;
