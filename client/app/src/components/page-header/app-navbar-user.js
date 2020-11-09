import React from 'react'
import { Translation } from 'react-i18next'
import { connect } from 'react-redux';
import { Nav, NavDropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { toggleLoginModal, userLogout } from '../../actions/loginActions'

const AppNavbarUser = (props) => {

  const openModal = () => props.toggleLoginModal(true)
  const getElement = (t) => {
    if (props.app.user.username === '') {
      return (
        <Nav className="mr-auto">
          <Nav.Item onClick={ openModal } className="login">
            <span className="icon">
              <FontAwesomeIcon icon={ faSignInAlt } />
            </span>
            <span className="label">{ t('Login') }</span>
          </Nav.Item>
        </Nav>
      )
    } else {
      return (
        <NavDropdown title={ props.app.user.username } id="navbar-minty-dropdown" drop="down">
          <NavDropdown.Item onClick={ props.userLogout }>
            <span className="icon">
              <FontAwesomeIcon icon={ faSignOutAlt } />
            </span>
            <span className="label">{ t('Sign out') }</span>
          </NavDropdown.Item>
        </NavDropdown>
      )
    }
  };

  return (
    <Translation>{ (t) => getElement(t) }</Translation>
  )
}

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  toggleLoginModal: (status) => dispatch(toggleLoginModal(status)),
  userLogout: () => dispatch(userLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppNavbarUser);