import React from 'react';
import { Container, Table } from 'react-bootstrap';



function Scorecard({teebox}) {
    
    console.log("Teebox:" + teebox);
    function header() {
        const headerElements = [];
        headerElements.push(<th>Hole</th>);

        for(var i = 0; i < 18; i++) {
            if(i+1 === 10){
                headerElements.push(<td>Out</td>)
            }

            headerElements.push(<th>{i+1}</th>)
        }

        headerElements.push(<th>In</th>);
        headerElements.push(<th>Total</th>);
        headerElements.push(<th>Slope/Rating</th>);

        return(headerElements);
    }

    function teeboxData() {
        const teeboxData = []
        teeboxData.push(<td>Yardage</td>)

        for(var i = 0; i < 18; i++) {
            if(i+1 === 10){
                teeboxData.push(<td> {teebox.yardageOut} </td>)
            }
            teeboxData.push(<td></td>)
        }
        
        teeboxData.push(<td>{teebox.yardageIn}</td>)
        teeboxData.push(<td>{teebox.yardage}</td>)
        teeboxData.push(<td>{teebox.slope} / {teebox.rating}</td>)

        return(teeboxData)
    }

    function parData() {
        const parData = []
        parData.push(<td>Par</td>)

        for(var i = 0; i < 18; i++) {
            if(i+1 === 10){
                parData.push(<td>{teebox.parOut}</td>)
            }

            parData.push(<td></td>)
        }

        parData.push(<td>{teebox.parIn}</td>)
        parData.push(<td>{teebox.par}</td>)
        parData.push(<td colSpan={1}></td>)

        return(parData)
    }

    function strokeIndexData() {
        const strokeIndexData = []
        strokeIndexData.push(<td>Handicap</td>)

        for(var i = 0; i < 18; i++) {
            if(i+1 === 10){
                strokeIndexData.push(<td></td>)
            }

            strokeIndexData.push(<td></td>)
        }
        
        strokeIndexData.push(<td colSpan={3}></td>)

        return(strokeIndexData)
    }

    return (
        <>
            <h3 className='mt-5'> {teebox.name} </h3>
            <Table className="mt-3" striped bordered variant="dark" style={{"text-align": "center", "vertical-align": "middle"}}>
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
                        {parData()}
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
