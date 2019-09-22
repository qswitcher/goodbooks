import React from "react";
import HeaderBar from "./HeaderBar/HeaderBar";

import "./App.css";
import BookResults from "./BookResults/BookResults";
import SearchBar from "./SearchBar/SearchBar";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { Provider as BookResultsProvider } from "./contexts/BookResults";

import styled from "styled-components";

const MainContent = styled.div`
  max-width: 800px;
  margin: auto;
`;

function App() {
  const initialState = {
    books: [],
    loading: false
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "fetchResults":
        return {
          ...state,
          books: action.books,
          loading: false
        };
      case "loading":
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  };

  return (
    <BookResultsProvider initialState={initialState} reducer={reducer}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <HeaderBar />
          <MainContent>
            <SearchBar />
            <BookResults />
          </MainContent>
        </div>
      </ThemeProvider>
    </BookResultsProvider>
  );
}

export default App;
