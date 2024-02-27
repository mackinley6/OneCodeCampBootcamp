import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <div>
        <Navbar>
            <Navbar.Brand as={Link} to='/'>My App</Navbar.Brand>
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/about'>About us</Nav.Link>
            <Nav.Link as={Link} to='/contact'>Contact us</Nav.Link>
        </Navbar>
    </div>
  )
}

export default Header