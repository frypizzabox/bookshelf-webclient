import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
} from 'react-bootstrap';
import './style.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.goToURL = this.goToURL.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <Navbar className="custom-navbar" inverse>
          <Navbar.Header>
            <Navbar.Brand>BookShelf</Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={1} onClick={() => this.goToURL('/dashboard/settings')}>GitHub</NavItem>
          </Nav>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavBar;
