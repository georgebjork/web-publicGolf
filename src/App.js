import './App.css';
import React from 'react';
import HomePage from './Components/Pages/HomePage';
import { Route, Routes} from "react-router-dom";


import Header from './Components/Header';
import DisplayCoursePage from './Components/Pages/DisplayCoursePage';
import ProfilePage from './Components/Pages/ProfilePage';
import CoursesPage from './Components/Pages/CoursesPage';
import EditCoursePage from './Components/Pages/EditCoursePage';

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
          <Route path=":courseId/:courseName" element={<DisplayCoursePage/>}/>
          <Route path=":courseId/:courseName/edit" element={<EditCoursePage/>}/>
        </Route>

        {/* Route Not Found */}
        <Route path="*" element={<NotFound/>} status={404}/>
      </Routes>    
    </div>
  );
}

export default App;
