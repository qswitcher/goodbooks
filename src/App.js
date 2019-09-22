import React from "react";
import HeaderBar from "./HeaderBar/HeaderBar";

import "./App.css";
import BookResults from "./BookResults/BookResults";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <HeaderBar />
        <BookResults />
      </div>
    </ThemeProvider>
  );
}

export default App;
