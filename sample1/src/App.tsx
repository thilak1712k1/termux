import React from 'react';
import './App.css';
import Termux from './compounds/termux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Simple from './compounds/simple';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Termux/>}></Route>
        <Route path='/simple' element = {<Simple/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
