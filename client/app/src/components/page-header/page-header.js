import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faWifi, faUser, faTimes, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faApple, faLinux, faWindows } from '@fortawesome/free-brands-svg-icons';
import { Navbar, Nav, NavDropdown, Modal, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  login,
  toggleLoginModal,
  updateUser
} from '../../actions/headerActions';
import LoginAlert from './login-alert';
import './page-header.css';

const PageHeader = (props) => {
  const openModal = () => props.toggleLoginModal(true)
  const closeModal = () => props.toggleLoginModal(false)
  const login = () => {
    props.login(props.header.user)
  }
  const updateUsername = (event) => {
    props.updateUser({
      username: event.target.value,
      password: props.header.user.password
    })
  }
  const updatePassword = (event) => {
    props.updateUser({
      username: props.header.user.username,
      password: event.target.value
    })
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
      <Modal show={ props.header.isLoginModalShown } onHide={ closeModal }>
        <Modal.Header closeButton>
          <Modal.Title>
            <FontAwesomeIcon icon={ faUser } />
            <span className="label">Login</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="username">
              <Form.Control type="email" placeholder="Your user name" onChange={ updateUsername } />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Control type="password" placeholder="Your password" onChange={ updatePassword } />
            </Form.Group>
            <LoginAlert type="error" />
            <LoginAlert type="success" />
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
  login: (user) => dispatch(login(user)),
  toggleLoginModal: (status) => dispatch(toggleLoginModal(status)),
  updateUser: (user) => dispatch(updateUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(PageHeader);