import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { CourseHoles } from "./Scorecard.js"
import "./EditTeeboxYardage.css"

function EditTeeboxYardage({teebox}) {

    const [holes] = useState(teebox.holes);
    const [newData, setNewData] = useState([]);

    const yardageElements = [];

    // yardageElements.push(<td><input type="text" value={teebox.name} className="input ml-4"/></td>);
    yardageElements.push(<td>Yardage</td>);

    // All of the hole yardages
    for(let i in holes) { yardageElements.push(<td><input type="text" pattern="[0-9]*" placeholder={holes[i].yardage} id={holes[i].id} onBlur={handleInputChange} className="hole"/></td>); }
    
    // This will splice in the yardage out total
    yardageElements.splice(10, 0, <td>{teebox.yardageOut}</td>);

    // Push remaining elements
    yardageElements.push(<td>{teebox.yardageIn}</td>);
    yardageElements.push(<td>{teebox.yardage}</td>);
    yardageElements.push(<td>{teebox.slope} / {teebox.rating}</td>);

    function handleInputChange(e) {
             
        if(isNaN(e.target.value) || e.target.value === "") {
            return;
        }

        // Find the hole and put into the newData array
        const hole = holes.find(h => h.id === parseInt(e.target.id));
        hole.yardage = parseInt(e.target.value);

        // Set the new data
        setNewData(prevData => [...prevData, hole]);
    }

    function handleSubmit() {
        console.log(newData);
    }


    return(
        <>  
            <div class="d-flex justify-content-between mt-5">
                <h3>{teebox.name}</h3>
                <Button variant="success" onClick={handleSubmit}> Submit </Button>
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