
import React from "react";
import "./Styles/Scorecard.css"

function CourseHandicap({teebox}) {

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

export default CourseHandicap;