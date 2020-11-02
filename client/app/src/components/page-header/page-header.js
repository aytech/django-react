import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faWifi, faUser, faTimes, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faApple, faLinux, faWindows } from '@fortawesome/free-brands-svg-icons';
import { Navbar, Nav, NavDropdown, Modal, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { toggleLoginModal } from '../../actions/mainActions';
import './page-header.css';

const PageHeader = (props) => {
  const openModal = () => props.toggleLoginModal(true)
  const closeModal = () => props.toggleLoginModal(false)
  const login = () => {
    alert("Logging in")
    closeModal()
  }
  return (
    <React.Fragment>
      <Navbar bg="primary" expand="lg" variant="dark">
        <Navbar.Brand href="/">Boilerplate Django App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-minty" />
        <Navbar.Collapse id="navbar-minty">
          <Nav className="mr-auto">
            <Nav.Link href="/" active>
              <span className="icon">
                <FontAwesomeIcon icon={ faHome } />
              </span>
              <span className="label">Home</span>
            </Nav.Link>
            <Nav.Link href="/">
              <span className="icon">
                <FontAwesomeIcon icon={ faEnvelope } />
              </span>
              <span className="label">Contact</span>
            </Nav.Link>
            <NavDropdown title="Products" id="navbar-minty-dropdown">
              <NavDropdown.Item href="/">
                <span className="icon">
                  <FontAwesomeIcon icon={ faLinux } />
                </span>
                <span className="label">Item 1</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="/">
                <span className="icon">
                  <FontAwesomeIcon icon={ faApple } />
                </span>
                <span className="label">Item 2</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="/">
                <span className="icon">
                  <FontAwesomeIcon icon={ faWindows } />
                </span>
                <span className="label">Item 3</span>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">
                <span className="icon">
                  <FontAwesomeIcon icon={ faWifi } />
                </span>
                <span className="label">Separated Item</span>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="mr-auto">
            <Nav.Item onClick={ openModal } className="login">
              <span className="icon">
                <FontAwesomeIcon icon={ faUser } />
              </span>
              <span className="label">Login</span>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={ props.state.isLoginModalShown } onHide={ closeModal }>
        <Modal.Header closeButton>
          <Modal.Title>
            <FontAwesomeIcon icon={faUser}/>
            <span className="label">Login</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="username">
              <Form.Control type="email" placeholder="Your user name" />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Control type="password" placeholder="Your password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={ closeModal }>
            <FontAwesomeIcon icon={ faTimes } />
            <span className="label">Close</span>
          </Button>
          <Button variant="primary" onClick={ login }>
            <FontAwesomeIcon icon={ faSignInAlt } />
            <span className="label">Login</span>
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  )
};

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  toggleLoginModal: (status) => dispatch(toggleLoginModal(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(PageHeader);