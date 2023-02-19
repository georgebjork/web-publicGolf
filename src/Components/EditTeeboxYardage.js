import React from "react";
import { Form, Table, Button } from "react-bootstrap";
import { CourseHoles } from "./Scorecard.js"
import "./EditTeeboxYardage.css"

function EditTeeboxYardage({teebox}) {

    const holes = teebox.holes

    const yardageElements = [];

    // yardageElements.push(<td><input type="text" value={teebox.name} className="input ml-4"/></td>);
    yardageElements.push(<td>Yardage</td>);

    // All of the hole yardages
    for(let i in holes) { yardageElements.push(<td><input type="text" className="hole"/></td>); }
    
    // This will splice in the yardage out total
    yardageElements.splice(10, 0, <td>{teebox.yardageOut}</td>);

    // Push remaining elements
    yardageElements.push(<td>{teebox.yardageIn}</td>);
    yardageElements.push(<td>{teebox.yardage}</td>);
    yardageElements.push(<td>{teebox.slope} / {teebox.rating}</td>);


    return(
        <>  
            <div class="d-flex justify-content-between mt-5">
                <h3>{teebox.name}</h3>
                <Button variant="success"> Submit </Button>
            </div>
            
            <Table className="mt-3" striped responsive variant="dark" size="lg" style={{"text-align": "center", "vertical-align": "middle"}}>
                <thead>
                    <tr>
                        <CourseHoles />
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {yardageElements}
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default EditTeeboxYardage;