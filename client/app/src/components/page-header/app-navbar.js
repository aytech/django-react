import React from 'react'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faWifi, faUser } from '@fortawesome/free-solid-svg-icons'
import { faApple, faLinux, faWindows } from '@fortawesome/free-brands-svg-icons'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Translation } from 'react-i18next'
import { toggleLoginModal } from '../../actions/loginActions'

const AppNavbar = (props) => {

  const openModal = () => props.toggleLoginModal(true)

  return (
    <Translation>
      {
        (t) => (
          <Navbar bg="primary" expand="lg" variant="dark">
            <Navbar.Brand href="/">{ t('App name') }</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-minty" />
            <Navbar.Collapse id="navbar-minty">
              <Nav className="mr-auto">
                <Nav.Link href="/" active>
                  <span className="icon">
                    <FontAwesomeIcon icon={ faHome } />
                  </span>
                  <span className="label">{ t('Home') }</span>
                </Nav.Link>
                <Nav.Link href="/">
                  <span className="icon">
                    <FontAwesomeIcon icon={ faEnvelope } />
                  </span>
                  <span className="label">{ t('Contact') }</span>
                </Nav.Link>
                <NavDropdown title={ t('Products') } id="navbar-minty-dropdown">
                  <NavDropdown.Item href="/">
                    <span className="icon">
                      <FontAwesomeIcon icon={ faLinux } />
                    </span>
                    <span className="label">{ t('Item') }</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/">
                    <span className="icon">
                      <FontAwesomeIcon icon={ faApple } />
                    </span>
                    <span className="label">{ t('Item') } 2</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/">
                    <span className="icon">
                      <FontAwesomeIcon icon={ faWindows } />
                    </span>
                    <span className="label">{ t('Item') } 3</span>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/">
                    <span className="icon">
                      <FontAwesomeIcon icon={ faWifi } />
                    </span>
                    <span className="label">{ t('Separated item') }</span>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav className="mr-auto">
                <Nav.Item onClick={ openModal } className="login">
                  <span className="icon">
                    <FontAwesomeIcon icon={ faUser } />
                  </span>
                  <span className="label">{ t('Login') }</span>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
      }
    </Translation>
  )
}

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  toggleLoginModal: (status) => dispatch(toggleLoginModal(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(AppNavbar);