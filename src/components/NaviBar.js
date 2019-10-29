import React from 'react'
import {
Nav , Navbar , Button , Form , NavDropdown , FormControl
  } from "react-bootstrap";
import { Router , Link } from "react-router-dom";
import Routes from './Routes'

  

export default function NaviBar() {
    return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/candidates">Candidates</Nav.Link>
                        <Nav.Link href="/company">Company</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
    )
}
