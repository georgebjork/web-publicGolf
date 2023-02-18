import React from "react";
import { Form, Table } from "react-bootstrap";
import { CourseHoles } from "./Scorecard.js"
import "./EditTeeboxYardage.css"

function EditTeeboxYardage({teebox}) {

    const holes = teebox.holes

    const yardageElements = [];

    // yardageElements.push(<td><Form.Control type="text" value={teebox.name} className="input ml-4"/></td>);
    yardageElements.push(<td>Yardage</td>);

    // All of the hole yardages
    for(let i in holes) { yardageElements.push(<td><Form.Control type="text" value={holes[i].yardage} className="input"/></td>); }
    
    // This will splice in the yardage out total
    yardageElements.splice(10, 0, <td><Form.Control type="text" value={teebox.yardageOut} className="input"/></td>);

    // Push remaining elements
    yardageElements.push(<td><Form.Control type="text" value={teebox.yardageIn} className="input"/></td>);
    yardageElements.push(<td><Form.Control type="text" value={teebox.yardage} className="input"/></td>);
    yardageElements.push(<td>{teebox.slope} / {teebox.rating}</td>);


    return(
        <>
            <h2 className="mt-5">{teebox.name}</h2>
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