import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import BookList from './Components/BookList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BookList/>
    </div>
  );
}

export default App;
