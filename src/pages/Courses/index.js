import React, {useEffect, useState} from 'react'
import AllCourses from './AllCourses';
import { Container } from 'react-bootstrap';


function index() {

    return(
        <>
            <Container>
                <h1>Courses</h1>
                <AllCourses/>  
            </Container>          
        </>
    )
}


export default index;