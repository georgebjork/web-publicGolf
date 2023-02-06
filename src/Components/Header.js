import React from 'react';
import { useState } from 'react';

import { Navbar, Container, Nav, Modal, Button, NavDropdown, NavbarBrand, Form  } from 'react-bootstrap';
import { MarkGithubIcon } from '@primer/octicons-react'; //https://primer.style/octicons/

function Header() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                
                <Container>
                <Navbar.Brand href="/"> Public Golf </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto">

                            <Nav.Link href='#'>Courses</Nav.Link>
                            <Nav.Link href="#">Profile</Nav.Link>
                            <Nav.Link onClick={handleShow}>Stats</Nav.Link>

                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                            
                        </Nav>
                        
                        <Nav>                        
                            <NavbarBrand href="https://github.com/georgebjork/web-publicGolf">
                                <MarkGithubIcon size="medium" aria-label="GitHub"  />
                            </NavbarBrand>
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