import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faWifi } from '@fortawesome/free-solid-svg-icons';
import { faApple, faLinux, faWindows } from '@fortawesome/free-brands-svg-icons';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './page-header.css';

const PageHeader = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Navbar.Brand href="/">Boilerplate Django App</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-minty" />
      <Navbar.Collapse id="navbar-minty">
        <Nav className="mr-auto">
          <Nav.Link href="/" active>
            <span className="icon">
              <FontAwesomeIcon icon={faHome} />
            </span>
            <span className="label">Home</span>
          </Nav.Link>
          <Nav.Link href="/">
            <span className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <span className="label">Contact</span>
          </Nav.Link>
          <NavDropdown title="Products" id="navbar-minty-dropdown">
            <NavDropdown.Item href="/">
              <span className="icon">
                <FontAwesomeIcon icon={faLinux} />
              </span>
              <span className="label">Item 1</span>
            </NavDropdown.Item>
            <NavDropdown.Item href="/">
              <span className="icon">
                <FontAwesomeIcon icon={faApple} />
              </span>
              <span className="label">Item 2</span>
            </NavDropdown.Item>
            <NavDropdown.Item href="/">
              <span className="icon">
                <FontAwesomeIcon icon={faWindows} />
              </span>
              <span className="label">Item 3</span>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/">
              <span className="icon">
                <FontAwesomeIcon icon={faWifi} />
              </span>
              <span className="label">Separated Item</span>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default PageHeader;