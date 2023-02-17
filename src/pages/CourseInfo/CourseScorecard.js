import React, { useState, useEffect } from "react"; 
import { Container, Spinner } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { getCoursesById } from '../../api/courseApi';
import LoadingSpinner from "../../Components/LoadingSpinner"
import Scorecard from "../../Components/Scorecard/Scorecard";

function CourseScorecard() {

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

    function returnScorecard() {
        return <Scorecard course={course} />
    }

    return (
        <>
            <Container>
                { isLoading ? <LoadingSpinner /> : returnScorecard() }
            </Container>
        </>
    )
}


export default CourseScorecard;