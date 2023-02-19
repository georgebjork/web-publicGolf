import React, { useState, forwardRef, useImperativeHandle } from "react";
import { updateHole, updateTeebox } from "../api/courseApi.js";
import "./EditTeeboxYardage.css"

function EditTeeboxYardage({teebox}, ref) {

    const [holes, setHoles] = useState(teebox.holes);
    
    const [newData, setNewData] = useState([]);

    const yardageElements = [];

    // yardageElements.push(<td><input type="text" value={teebox.name} className="input ml-4"/></td>);
    yardageElements.push(<td className="teebox-name">{teebox.name}</td>);

    // All of the hole yardages
    for(let i in holes) { yardageElements.push(<td><input type="text" pattern="[0-9]*" placeholder={holes[i].yardage} id={holes[i].id} onBlur={handleInputChange} className="hole"/></td>); }
    
    // This will splice in the yardage out total
    yardageElements.splice(10, 0, <td>{teebox.yardageOut}</td>);

    // Push remaining elements
    yardageElements.push(<td>{teebox.yardageIn}</td>);
    yardageElements.push(<td>{teebox.yardage}</td>);
    yardageElements.push(<td>{teebox.slope} / {teebox.rating}</td>);

    // This will be triggered from the parent component
    useImperativeHandle(ref, () => ({
        handleSubmit
    }));

    function addYardages() {
        let frontNine = 0
        let backNine = 0
        let total = 0;

        // Add the front nine
        for(let i = 0; i < 9; i++) {
            frontNine += holes[i].yardage;
        }

        // Add the back nine
        for(let i = 9; i < 18; i++) {
            backNine += holes[i].yardage;
        }

        // Total 
        total = frontNine + backNine;

        teebox.yardageOut = frontNine;
        teebox.yardageIn = backNine;
        teebox.yardage = total;
    }

    function handleInputChange(e) {
        // This will be our input checker
        if(isNaN(e.target.value) || e.target.value === "") {
            // This will run if we initally added an item but want it removed now
            setNewData(newData.filter(hole => hole.id !== parseInt(e.target.id)));
            return;
        }

        // Find the hole and put into the newData array
        let hole = holes.find(h => h.id === parseInt(e.target.id));
        hole = { ...hole, yardage: parseInt(e.target.value) };

        // Set the new data
        setNewData(prevData => [...prevData, hole]);
        addYardages();
    }

    function handleSubmit() {
        newData.forEach((element) => updateHole(teebox.id, element));
        //updateTeebox(teebox);
    }


    return(
        <>  
            <tr>
                {yardageElements}
            </tr>
        </>
    )
}

export default forwardRef(EditTeeboxYardage);