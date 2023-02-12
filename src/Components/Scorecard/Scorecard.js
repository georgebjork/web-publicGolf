import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { PencilIcon } from '@primer/octicons-react';

import CourseHoles from './CourseHoles.js';
import TeeboxYardage from './TeeboxYardage.js'
import CoursePar from './CoursePar.js';
import CourseHandicap from './CourseHandicap.js';

function Scorecard({course}) {

    const [editButton, setEditButton] = useState(true);

    return (
        <>
           

            <div class="d-flex justify-content-between mt-5">
                <h3> {course.name} </h3>
                <Button variant="success" disabled={editButton}>  <PencilIcon size={16} verticalAlign="middle" /> Edit </Button>
            </div>

            <Table className="mt-3" striped responsive variant="dark" size="lg" style={{"text-align": "center", "vertical-align": "middle"}}>
                <thead>
                    <tr>
                        <CourseHoles />
                    </tr>
                </thead>
                <tbody>
                
                    {course['teeboxes'].map((teebox => <tr> <TeeboxYardage teebox={teebox}/> </tr>))} 
                    <tr> <CoursePar teebox={course.teeboxes[0]}/> </tr>
                    <tr> <CourseHandicap teebox={course.teeboxes[0]}/> </tr>

                </tbody>

            </Table>

            <br className='mb-5'/>
        </>
    )
}

export default Scorecard;
