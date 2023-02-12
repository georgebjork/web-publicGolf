import React, {useEffect, useState} from 'react'
import { Container, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getCourses } from '../api/courseApi';
import LoadingSpinner from "../LoadingSpinner"

function CoursesPage() {

    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getCourses().then((response) => {
          setCourses(response.data);
          setIsLoading(false);
        })
        .catch((err) => {
            console.log("Error! " + err.message);
        });
    }, []);

    function returnCourses() {
        return courses.map((course => <li> <Link to={`/courses/${course.id}/${course.name}`}> {course.name} </Link></li>));
    }
    return(
        <>
            <Container>
                <h1>Courses Page!!!</h1>

                { isLoading ? <LoadingSpinner /> : returnCourses() }

            </Container>
            
        </>
    )
}


export default CoursesPage;