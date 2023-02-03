import React from 'react'
import { Table } from 'react-bootstrap';

function Scorecard() {

    function header() {
        const headerElements = [];
        headerElements.push(<th>Hole</th>);

        for(var i = 0; i < 18; i++) {
            headerElements.push(<th>{i+1}</th>)
        }

        headerElements.push(<th>IN</th>);
        headerElements.push(<th>TOTAL</th>);

        return(headerElements);
    }

    function teeboxData() {
        const teeboxData = []
        teeboxData.push(<td>Teebox</td>)

        for(var i = 0; i < 18; i++) {
            teeboxData.push(<td>null</td>)
        }
        
        teeboxData.push(<td>Course Rating</td>)
        teeboxData.push(<td>Slope</td>)

        return(teeboxData)
    }

    function strokeIndexData() {
        const strokeIndexData = []
        strokeIndexData.push(<td>Handicap</td>)

        for(var i = 0; i < 18; i++) {
            strokeIndexData.push(<td>null</td>)
        }
        
        strokeIndexData.push(<td colSpan={2}></td>)

        return(strokeIndexData)
    }

    return (
        <>
            <Table className="mt-5" striped bordered style={{"text-align": "center", "vertical-align": "middle"}}>
                <thead>
                    <tr>
                         {header()}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {teeboxData()}
                    </tr>

                    <tr>
                        {strokeIndexData()}
                    </tr>
                    
                </tbody>

            </Table>
        </>
    )
}

export default Scorecard;
