import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { getCoursesById } from '../api/courseApi';
import LoadingSpinner from "../LoadingSpinner";

import CourseHoles from "../Scorecard/CourseHoles"
import EditTeeboxYardage from "../ScorecardEdit/EditTeeboxYardage"

function EditCoursePage() {

    const [course, setCourse] = useState();
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
        <Container>
            { isLoading ? <LoadingSpinner /> : (
                <>
                
                    <h1 className="mt-5 mb-5">Edit {course.name} </h1> 

                    
                    <h3> Holes </h3>
                    <Table className="mt-3" striped responsive variant="dark" size="lg" style={{"text-align": "center", "vertical-align": "middle"}}> 
                        <thead>
                            <tr>
                                <CourseHoles />
                            </tr>
                        </thead>
                    </Table>



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

export default EditCoursePage