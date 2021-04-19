import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from '../logo.png';
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons"

export const NavBar = (props) => {
    return (
        <Navbar bg="dark" expand="lg">
            <Container>
            <Navbar.Brand href="#home"><img className={"logo"} src={logo} alt="logo.."/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <FontAwesomeIcon icon={faBars} style={{color: "white"}}>

                    </FontAwesomeIcon>
                </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">About me</Nav.Link>
                    <Nav.Link href="#home">Services</Nav.Link>
                    <Nav.Link href="#link">how work</Nav.Link>
                    <Nav.Link href="#link">portfolio</Nav.Link>
                    <Nav.Link href="#link">contacts</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};


