import React from 'react';
import Navbar from 'components/Navbar';
import '../src/styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details' element={<Details />} />
        </Routes>
    </BrowserRouter>
)
}

export default App;
