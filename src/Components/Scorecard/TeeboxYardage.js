import React from "react";
import "./Styles/Scorecard.css"

function TeeboxYardage({teebox}) {  

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

export default TeeboxYardage;