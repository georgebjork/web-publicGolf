import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { getCoursesById } from '../api/courseApi';

function EditCoursePage() {

    const {course, setCourse} = useState();
    const { courseName, courseId } = useParams();

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
    
    return(
        <>
            <Container>
                <h1>Edit {courseName}</h1>
            </Container>
            
        </>
    )
}

export default EditCoursePage