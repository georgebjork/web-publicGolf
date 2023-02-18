import React from 'react'
import { Link } from 'react-router-dom';
import LoadingSpinner from "../../Components/LoadingSpinner"
import { useFetch } from '../../hooks/useFetch';

function AllCourses() {

    const { isLoading, data, serverError } = useFetch('http://localhost:5239/api/course');

    return(
        <>
        
            { isLoading && <LoadingSpinner /> }

            {!isLoading && serverError ? (
                <h3> Error </h3>
            ) : (
                data && data.map((course => <li> <Link to={`/courses/${course.id}/${course.name}`}> {course.name} </Link></li>))

            )}
        </>
    )
}


export default AllCourses;