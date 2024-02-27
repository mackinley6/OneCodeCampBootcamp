// Header.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">Panakot</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">To Do</Nav.Link>
        <Nav.Link as={Link} to="/important">Important</Nav.Link>
        <Nav.Link as={Link} to="/contact">Suggestions</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
