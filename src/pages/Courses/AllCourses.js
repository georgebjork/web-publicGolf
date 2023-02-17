import React, {useEffect, useState} from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoadingSpinner from "../../Components/LoadingSpinner"
import { useFetch } from '../../hooks/useFetch';

function AllCourses() {

    const [courses, setCourses] = useState([]);

    const { isLoading, data, serverError } = useFetch('http://localhost:5239/api/course');

    function returnCourses() {
        return data.map((course => <li> <Link to={`/courses/${course.id}/${course.name}`}> {course.name} </Link></li>));
    }

    return(
        <>
            <Container>
                { isLoading && <LoadingSpinner /> }

                {!isLoading && serverError ? (
                    <h3> Error </h3>
                ) : (
                    returnCourses()
                )}
            </Container>
        </>
    )
}


export default AllCourses;