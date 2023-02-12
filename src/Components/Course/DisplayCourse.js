import React, { useState, useEffect } from "react"; 
import { Container, Spinner } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { getCoursesById } from '../api/courseApi';
import Scorecard from "../Scorecard/Scorecard";

function DisplayCourse () {

    // Grab from the url
    const { courseName, courseId } = useParams();

    const [course, setCourse] = useState();

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getCoursesById(courseId).then((response) => {
            setCourse(response.data[0]);
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

    function returnScorecard() {
        return <Scorecard course={course} />
    }

    return (
        <>
            <Container>
                { isLoading ? returnSpinner() : returnScorecard() }
            </Container>
        </>
    )
}


export default DisplayCourse;