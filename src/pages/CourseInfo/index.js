import React, { useState, useEffect } from "react"; 
import { Container } from "react-bootstrap";
import CourseScorecard from "./CourseScorecard";
import { useParams } from 'react-router-dom';


function index() {
    
    return (
        <>
            <Container>
                <CourseScorecard/>
            </Container>
        </>
    )
}


export default index;