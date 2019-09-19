import React from 'react';
import HeaderBar from './HeaderBar/HeaderBar';

import './App.css';
import BookResults from './BookResults/BookResults';

function App() {
  return (
    <div className="App">
      <HeaderBar/>
      <BookResults/>
    </div>
  );
}

export default App;
