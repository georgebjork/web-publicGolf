import React from 'react';
import { useState } from 'react';

import { Navbar, Container, Nav, Modal, Button } from 'react-bootstrap';


function Header() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#" className='display-1'>Public Golf</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                        <Nav>
                            <Nav.Link href='#'>foo</Nav.Link>
                            <Nav.Link href="#">foo</Nav.Link>
                            <Nav.Link href="#">foo</Nav.Link>
                            <Nav.Link onClick={handleShow}>Golf Stats</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> Coming Soon! </Modal.Title>
                </Modal.Header>
                    <Modal.Body>Stat tracker is coming soon!</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Ok!
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Header;