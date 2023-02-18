import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { useFetch } from "../../hooks/useFetch";
import LoadingSpinner from "../../Components/LoadingSpinner";

import EditTeeboxYardage from "../../Components/ScorecardEdit/EditTeeboxYardage"

function EditCourse() {

    const { courseId } = useParams();

    const { isLoading, data, serverError } = useFetch(`http://localhost:5239/api/course/${courseId}`);
    
    return(
        <Container>
            { isLoading && <LoadingSpinner /> }

            {!isLoading && serverError ? (
                <h3> Error </h3>
            ) : (
                data && <>
                        <h1 className="mt-5 mb-5">Edit {data[0].name} </h1> 
                        <h3> Teeboxes </h3>
                        { data[0]["teeboxes"].map(teebox => <EditTeeboxYardage teebox={teebox} />) }

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