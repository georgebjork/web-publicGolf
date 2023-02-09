import React, {useEffect, useState} from 'react'
import { Container, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CoursesPage() {

    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5239/api/course')
           .then((response) => response.json())
           .then((data) => {
              //console.log(data);
              setCourses(data);
              setIsLoading(false);
           })
           .catch((err) => {
              console.log("Error! " + err.message);
           });
    }, []);

    function returnSpinner() {
        return(
            <div class="spinner d-flex justify-content-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden" size="lg">Loading...</span>
                </Spinner>
            </div>
            
        );
    }

    function returnCourses() {
        return courses.map((course => <li> <Link to={`/courses/${course.id}/${course.name}`}> {course.name} </Link></li>));
    }
    return(
        <>
            <Container>
                <h1>Courses Page!!!</h1>

                { isLoading ? returnSpinner() : returnCourses() }

            </Container>
            
        </>
    )
}


export default CoursesPage;