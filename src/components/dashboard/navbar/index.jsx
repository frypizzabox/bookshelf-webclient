import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
} from 'react-bootstrap';
import './style.css';

const NavBar = () => (
  <React.Fragment>
    <Navbar className="custom-navbar" inverse>
      <Navbar.Header>
        <Navbar.Brand>BookShelf</Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <NavItem eventKey={1} onClick={() => {}}>GitHub</NavItem>
      </Nav>
    </Navbar>
  </React.Fragment>
);

export default NavBar;
