import React, { useState, useEffect } from "react"; 
import { Container } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import Scorecard from "../Scorecard";

function DisplayCourse () {

    // Grab from the url
    const { courseName, courseId } = useParams();

    // This will hold the course
    const [course, setCourse] = useState([]);
    const [teeboxes, setTeeboxes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5239/api/course/" + courseId)
           .then((response) => response.json())
           .then((data) => {
                console.log(data[0].teeboxes);
                setCourse(data);
                setTeeboxes(data[0].teeboxes)
           })
           .catch((err) => {
              console.log("Error! " + err.message);
           });
    }, []);

    return (
        <>
            <Container>
                <h1 className="mt-5">{courseName}</h1>

                { teeboxes.map((teebox => <Scorecard key={teebox.id} teebox={teebox} /> )) }
            </Container>
        </>
    )
}


export default DisplayCourse;