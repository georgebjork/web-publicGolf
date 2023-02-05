import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5239/api/course')
           .then((response) => response.json())
           .then((data) => {
              //console.log(data);
              setCourses(data);
           })
           .catch((err) => {
              console.log("Error! " + err.message);
           });
    }, []);


    return(
       <Container>
            { courses.map((course => <li> <Link to={`/course/${course.id}/${course.name}`}> {course.name} </Link></li>)) }
            {/* {courses.map((course =>  <Scorecard course={course}/> ))} */}
       </Container>
    );
}


export default Home;