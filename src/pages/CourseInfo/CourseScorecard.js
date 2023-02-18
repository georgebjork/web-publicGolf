import React, { useState, useEffect } from "react"; 
import { Container, Spinner } from "react-bootstrap";
import { useParams } from 'react-router-dom';

import { useFetch } from '../../hooks/useFetch';

import LoadingSpinner from "../../Components/LoadingSpinner"
import { Scorecard } from "../../Components/Scorecard/Scorecard";

function CourseScorecard() {

    // Grab from the url
    const { courseName, courseId } = useParams();

    const [course, setCourse] = useState();

    const { isLoading, data, serverError } = useFetch(`http://localhost:5239/api/course/${courseId}`);

    return (
        <>
            
            { isLoading && <LoadingSpinner /> }

            {!isLoading && serverError ? (
                <h3> Error </h3>
            ) : (
                data && <Scorecard course={data[0]} />
            )}
    
        </>
    )
}


export default CourseScorecard;

//