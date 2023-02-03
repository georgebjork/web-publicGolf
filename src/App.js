import './App.css';
import React from 'react';
import Home from './Components/Home';
import { Route, Routes} from "react-router-dom";
import Header from './Components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>          
        <Route exact path="/" element={<Home />} />
      </Routes>    
    </>
  );
}

export default App;
