import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    
        <Navbar bg="dark" variant="dark" sticky='top'>
            <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">                    
                        <Nav.Link as={Link} to="/">Counter</Nav.Link>                   
                        <Nav.Link as={Link} to="/products">Products</Nav.Link>                  
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>                  
                        <Nav.Link as={Link} to="/apicontact">Contact API</Nav.Link>   
                        <Nav.Link as={Link} to="/task">Task Manager</Nav.Link>               
            
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    
  )
}

export default Header