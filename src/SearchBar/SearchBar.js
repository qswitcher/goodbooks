import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useStateValue } from "../contexts/BookResults";

const Input = styled.input`
  width: 100%;
  padding: 8px;
  padding-left: 28px;
  margin: 0;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  border-color: #cfcfd3;
  font-size: inherit;
  line-height: inherit;
  margin-right: 8px;
`;

const SearchIcon = styled.span`
  position: absolute;
  left: 8px;
  top: 8px;
`;

const SearchButton = styled.span`
  position: relative;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
`;

const SearchBar = () => {
  const [_, dispatch] = useStateValue();
  const [keywords, setKeywords] = useState();

  const onChange = event => setKeywords(event.target.value);

  const onKeyUp = event => {
    event.preventDefault();
    if (event.keyCode === 13) {
      search(keywords);
    }
  };

  const search = q => {
    dispatch({
      type: "loading"
    });
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${q}`)
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: "fetchResults",
          books: data.items
        })
      );
  };

  return (
    <Container>
      <SearchButton>
        <Input
          onChange={onChange}
          onKeyUp={onKeyUp}
          type="text"
          placeholder="Search by Title, Author, or ISBN"
        />
        <SearchIcon>
          <FontAwesomeIcon icon={faSearch} color={"#717171"} />
        </SearchIcon>
      </SearchButton>
    </Container>
  );
};

export default SearchBar;
