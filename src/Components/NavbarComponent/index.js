import './style.css';
import React from 'react';
// import {Link} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const  NavbarComponent = () => {
  return (
  <>
    <Navbar bg="light" expand="lg">
      <NavLink className="navbar-brand" to="/simple-project-react-js/">Ultra Profile</NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink className="nav-link" to="/simple-project-react-js/">Home</NavLink>
          <NavLink className="nav-link" to="/simple-project-react-js/contact">Contact</NavLink>
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
    </>
  );
}

export default NavbarComponent;
