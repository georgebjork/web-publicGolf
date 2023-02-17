import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { getCoursesById } from '../../api/courseApi';
import LoadingSpinner from "../../Components/LoadingSpinner";

import EditTeeboxYardage from "../../Components/ScorecardEdit/EditTeeboxYardage"

function EditCourse() {

    const [course, setCourse] = useState();
    const { courseId } = useParams();

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
        <Container>
            { isLoading ? <LoadingSpinner /> : (
                <>
                
                    <h1 className="mt-5 mb-5">Edit {course.name} </h1> 

                    <h3> Teeboxes </h3>
                    { course["teeboxes"].map(teebox => <EditTeeboxYardage teebox={teebox} />)}

                    <h3> Par </h3>
                    <p> Par editing will go here </p>
                    
                    <h3> Handicap </h3>
                    <p> Hanidcap editing will go here</p>
                </>
            )} 
        </Container>
    )
}

export default EditCourse;