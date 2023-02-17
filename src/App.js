import './App.css';
import React from 'react';

import { Route, Routes} from "react-router-dom";

import Header from './Components/Header';

import HomePage from './pages/Home';
import CourseInfo from './pages/CourseInfo';
import ProfilePage from './pages/Profile';
import CoursesPage from './pages/Courses';
import EditCoursePage from './pages/EditCourses';

import NotFound from './Components/NotFound.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>          
        <Route exact path="/" element={<HomePage/>} />
        <Route path="profile" element={<ProfilePage/>}/>

        <Route path="courses">
          <Route index element={<CoursesPage/>} />
          <Route path=":courseId/:courseName" element={<CourseInfo/>}/>
          <Route path=":courseId/:courseName/edit" element={<EditCoursePage/>}/>
        </Route>

        {/* Route Not Found */}
        <Route path="*" element={<NotFound/>} status={404}/>
      </Routes>    
    </div>
  );
}

export default App;
