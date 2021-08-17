import React from 'react';
import './App.css';
//import Book from './Components/representational/Book';
import MainComponent from './Components/MainComponent';
import {BrowserRouter} from 'react-router-dom';


const App=()=>{
  return (
    <BrowserRouter>
    <MainComponent/>
    </BrowserRouter>
  );
}

export default App;

