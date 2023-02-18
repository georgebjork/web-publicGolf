import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { PencilIcon } from '@primer/octicons-react';

import "./Scorecard.css"

export function Scorecard({course}) {

    const [editButton, setEditButton] = useState(false);

    return (
        <>
            <div class="d-flex justify-content-between mt-5">
                <h3> {course.name} </h3>
                <Button variant="success" disabled={editButton} href={`/courses/${course.id}/${course.name}/edit`}>  <PencilIcon size={16} verticalAlign="middle" /> Edit </Button>
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

export function CourseHandicap({teebox}) {

    const holes = teebox.holes;

    const strokeIndexElements = [];

    // Handicap title
    strokeIndexElements.push(<td className='title-element'>Handicap</td>);

    for(let i in holes) { strokeIndexElements.push(<td>{holes[i].handicap}</td>); }

    // This will splice in a blank cell
    strokeIndexElements.splice(10, 0, <td></td>);
    strokeIndexElements.push(<td colSpan={3}></td>);

    return strokeIndexElements;
}

export function CoursePar({teebox}) {

    const holes = teebox.holes;

    const parElements = [];
    // Par title
    parElements.push(<td className='title-element'>Par</td>);


    for(let i in holes) { parElements.push(<td>{holes[i].par}</td>); }

    // This will splice in the par out total
    parElements.splice(10, 0, <td> {teebox.parOut} </td>);

    parElements.push(<td>{teebox.parIn}</td>);
    parElements.push(<td>{teebox.par}</td>);
    parElements.push(<td colSpan={1}></td>);

    return parElements;
}

export function TeeboxYardage({teebox}) {  

    const holes = teebox.holes

    const yardageElements = [];
    // Yardage title
    yardageElements.push(<td className="title-element">{teebox.name}</td>);

    // All of the hole yardages
    for(let i in holes) { yardageElements.push(<td>{holes[i].yardage}</td>); }
    
    // This will splice in the yardage out total
    yardageElements.splice(10, 0, <td> {teebox.yardageOut} </td>);

    // Push remaining elements
    yardageElements.push(<td>{teebox.yardageIn}</td>);
    yardageElements.push(<td>{teebox.yardage}</td>);
    yardageElements.push(<td>{teebox.slope} / {teebox.rating}</td>);

    return yardageElements;
}

export function CourseHoles() {

    return(
        <>
            <th className='title-element'>Hole</th>
            
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>

            <th>Out</th>

            <th>10</th>
            <th>11</th>
            <th>12</th>
            <th>13</th>
            <th>14</th>
            <th>15</th>
            <th>16</th>
            <th>17</th>
            <th>18</th>

            <th>In</th>

            <th>Total</th>
            <th>Slope/Rating</th>
        </>
    );
}
