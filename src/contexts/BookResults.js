import React, { createContext, useContext, useReducer } from "react";

const BookResultsContext = createContext();

export const Provider = ({ reducer, initialState, children }) => (
  <BookResultsContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </BookResultsContext.Provider>
);

export const useStateValue = () => useContext(BookResultsContext);
