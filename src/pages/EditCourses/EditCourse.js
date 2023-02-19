import React, { useRef, createRef, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { CourseHoles } from "../../Components/Scorecard"
import { useParams } from 'react-router-dom';
import { useFetch } from "../../hooks/useFetch";
import LoadingSpinner from "../../Components/LoadingSpinner";

import EditTeeboxYardage from "../../Components/EditTeeboxYardage"
import "./index.css"

function EditCourse() {

    const { courseId } = useParams();
    const teeboxRefs = useRef([]);

    const [btnIsLoading, setBtnIsLoading] = useState(false);

    const { isLoading, data, serverError } = useFetch(`http://localhost:5239/api/course/${courseId}`);
    
    async function handleClick() {
        setBtnIsLoading(true);
        await teeboxRefs.current.forEach(async (ref) => {
            ref.current.handleSubmit();
        });

        setTimeout(() => {
            setBtnIsLoading(false);
        }, 2000);
        
    }

    return(
        <Container>
            { isLoading && <LoadingSpinner /> }

            {!isLoading && serverError ? (
                <h3> Error </h3>
            ) : (
                data && <>
                        <h1 className="mt-5 mb-5">Edit {data[0].name} </h1> 
                        <h3> Teeboxes </h3>
                        <Table className="mt-3" striped responsive variant="dark" size="lg" style={{"text-align": "center", "vertical-align": "middle"}}>
                            <thead>
                                <tr>
                                    <CourseHoles />
                                </tr>
                            </thead>

                            <tbody>
                                { 
                                    data[0]["teeboxes"].map((teebox, index) => {
                                        teeboxRefs.current[index] = teeboxRefs.current[index] || createRef();
                                        return <EditTeeboxYardage teebox={teebox} ref={teeboxRefs.current[index]} id={teebox.id} />
                                    })
                                }
                            </tbody>

                        </Table>
                        
                        <div class="d-flex justify-content-end mt-2">
                            <Button className="button"variant="primary" disabled> Add Teebox </Button>
                            <Button className="button"variant="success" onClick={handleClick} disabled={btnIsLoading}> {btnIsLoading ? "Updating..." : "Submit"} </Button>
                        </div>
                        
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