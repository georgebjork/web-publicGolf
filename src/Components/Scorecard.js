import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { PencilIcon } from '@primer/octicons-react';


function Scorecard({teebox}) {

    const [holeData, setHoleData] = useState(teebox.holes);
    const [editButton, setEditButton] = useState(false);

    /**
     * Returns the top row of the scorecard. 
     */
    function header() {
        const headerElements = [];
        headerElements.push(<th>Hole</th>);
        
        // Push all of the hole numbers
        for(let i in holeData) { headerElements.push(<th>{holeData[i].holeNumber}</th>); }

        // This will add the label out. Between holes 9 and 10 
        //splice(position, numberOfItemsToRemove, item)
        headerElements.splice(10, 0, <th>Out</th>);

        //Push reamining items
        headerElements.push(<th>In</th>, <th>Total</th>, <th>Slope/Rating</th>);
        
        //Return
        return(headerElements);
    }

    function yardage() {
        const yardageElements = [];
        // Yardage title
        yardageElements.push(<td>Yardage</td>);

        // All of the hole yardages
        for(let i in holeData) { yardageElements.push(<td>{holeData[i].yardage}</td>); }
        
        // This will splice in the yardage out total
        yardageElements.splice(10, 0, <td> {teebox.yardageOut} </td>);

        // Push remaining elements
        yardageElements.push(<td>{teebox.yardageIn}</td>);
        yardageElements.push(<td>{teebox.yardage}</td>);
        yardageElements.push(<td>{teebox.slope} / {teebox.rating}</td>);

        return yardageElements
    }

    function parData() {
        const parElements = [];
        // Par title
        parElements.push(<td>Par</td>);


        for(let i in holeData) { parElements.push(<td>{holeData[i].par}</td>); }

        // This will splice in the par out total
        parElements.splice(10, 0, <td> {teebox.parOut} </td>);

        parElements.push(<td>{teebox.parIn}</td>);
        parElements.push(<td>{teebox.par}</td>);
        parElements.push(<td colSpan={1}></td>);

        return parElements;
    }

    function strokeIndexData() {
        const strokeIndexElements = [];

        // Handicap title
        strokeIndexElements.push(<td>Handicap</td>);

        for(let i in holeData) { strokeIndexElements.push(<td>{holeData[i].handicap}</td>); }
        
        // This will splice in a blank cell
        strokeIndexElements.splice(10, 0, <td></td>);
        strokeIndexElements.push(<td colSpan={3}></td>);

        return strokeIndexElements;
    }

    function testFunction() {
        const updatedHoleData = [...holeData];
        const hole = updatedHoleData.find(h => h.holeNumber === 1);
        hole.yardage++;
        setHoleData(updatedHoleData);
    }

    return (
        <>
           

            <div class="d-flex justify-content-between mt-5">
                <h3> {teebox.name} </h3>
                <Button variant="success" disabled={editButton} onClick={testFunction}>  <PencilIcon size={16} verticalAlign="middle" /> Edit </Button>
            </div>

            <Table className="mt-3" striped bordered responsive variant="dark" size="lg" style={{"text-align": "center", "vertical-align": "middle"}}>
                <thead>
                    <tr>
                        {header()}
                    </tr>
                </thead>
                <tbody>
                    <tr> {yardage()} </tr>
                    <tr> {parData()} </tr>
                    <tr> {strokeIndexData()} </tr>
                </tbody>

            </Table>

            <br className='mb-5'/>
        </>
    )
}

export default Scorecard;
