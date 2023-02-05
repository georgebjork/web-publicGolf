import './App.css';
import React from 'react';
import Home from './Components/Home';
import { Route, Routes} from "react-router-dom";
import Header from './Components/Header';
import DisplayCourse from './Components/Course/DisplayCourse';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>          
        <Route exact path="/" element={<Home />} />
        <Route path="course/:courseId/:courseName" element={<DisplayCourse/>}/>
      </Routes>    
    </div>
  );
}

export default App;
