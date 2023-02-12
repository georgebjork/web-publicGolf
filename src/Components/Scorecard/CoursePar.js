
import React from "react";
import "./Scorecard.css"

function CoursePar({teebox}) {

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

export default CoursePar;