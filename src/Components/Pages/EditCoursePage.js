import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from 'react-router-dom';

function EditCoursePage({course}) {

    const { courseName, courseId } = useParams();
    
    return(
        <>
            <Container>
                <h1>Edit {courseName}</h1>
            </Container>
            
        </>
    )
}

export default EditCoursePage