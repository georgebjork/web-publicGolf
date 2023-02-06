import React, { useState, useEffect } from "react"; 
import { Container, Spinner } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import Scorecard from "../Scorecard";

function DisplayCourse () {

    // Grab from the url
    const { courseName, courseId } = useParams();

    // This will hold the teeboxes
    const [teeboxes, setTeeboxes] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5239/api/course/" + courseId)
           .then((response) => response.json())
           .then((data) => {
                setTeeboxes(data[0].teeboxes)
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

    function returnScoreCards() {
        return teeboxes.map((teebox => <Scorecard key={teebox.id} teebox={teebox} /> ));
    }

    return (
        <>
            <Container>
                <h1 className="mt-5">{courseName}</h1>
                { isLoading ? returnSpinner() : returnScoreCards() }
            </Container>
        </>
    )
}


export default DisplayCourse;