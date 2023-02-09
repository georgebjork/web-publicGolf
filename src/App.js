import './App.css';
import React from 'react';
import Home from './Components/Home';
import { Route, Routes} from "react-router-dom";
import Header from './Components/Header';
import DisplayCourse from './Components/Course/DisplayCourse';
import ProfilePage from './Components/Pages/ProfilePage';
import CoursesPage from './Components/Pages/CoursesPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>          
        <Route exact path="/" element={<Home />} />
        <Route path="courses/:courseId/:courseName" element={<DisplayCourse/>}/>
        <Route path="profile" element={<ProfilePage/>}/>
        <Route path="courses" element={<CoursesPage/>}/>
      </Routes>    
    </div>
  );
}

export default App;
