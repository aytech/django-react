import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faWifi } from '@fortawesome/free-solid-svg-icons'
import { faApple, faLinux, faWindows } from '@fortawesome/free-brands-svg-icons'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { Translation } from 'react-i18next'
import AppNavbarUser from './app-navbar-user'

const AppNavbar = () => {
  return (
    <Translation>
      {
        (t) => (
          <Navbar bg="primary" expand="lg" variant="dark">
            <Container>
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
                <AppNavbarUser />
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )
      }
    </Translation>
  )
}

export default AppNavbar