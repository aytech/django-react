import React, { Component } from 'react'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faUser, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Button, Form, Modal } from 'react-bootstrap'
import { Translation } from 'react-i18next'
import LoginAlert from './login-alert'
import {
  addErrorMessage,
  addSuccessMessage,
  clearMessages,
  toggleLoginError,
  toggleLoginModal,
  userLogin
} from '../../actions/loginActions'

class LoginModal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  closeModal = () => { this.props.toggleLoginModal(false) }

  onPasswordUpdate = (event) => {
    this.setState({ password: event.target.value })
  }

  onUserNameUpdate = (event) => {
    this.setState({ username: event.target.value })
  }

  login = (t) => {
    if (this.isUserValid()) {
      this.props.clearMessages()
      this.props.userLogin(this.state.username, this.state.password, t)
    } else {
      this.props.addErrorMessage(t('Please provide username and pasword'))
      this.props.toggleLoginError(true)
    }
  }

  isUserValid = () => {
    return this.state.username.length > 0 && this.state.password.length > 0
  }

  render() {
    return (
      <Translation>
        {
          (t) => (
            <Modal show={ this.props.login.isModalShown } onHide={ this.closeModal }>
              <Modal.Header closeButton>
                <Modal.Title>
                  <FontAwesomeIcon icon={ faUser } />
                  <span className="label">{ t('Login') }</span>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group controlId="username">
                    <Form.Control type="text" placeholder={ t('Your user name') } onChange={ this.onUserNameUpdate } />
                  </Form.Group>
                  <Form.Group controlId="password">
                    <Form.Control type="password" placeholder={ t('Your password') } onChange={ this.onPasswordUpdate } />
                  </Form.Group>
                  <LoginAlert type="error" />
                  <LoginAlert type="success" />
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={ this.closeModal }>
                  <FontAwesomeIcon icon={ faTimes } />
                  <span className="label">{ t('Close') }</span>
                </Button>
                <Button variant="primary" onClick={ () => this.login(t) }>
                  <FontAwesomeIcon icon={ faSignInAlt } />
                  <span className="label">{ t('Login') }</span>
                </Button>
              </Modal.Footer>
            </Modal>
          )
        }
      </Translation>
    )
  }
}

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  addErrorMessage: (message) => dispatch(addErrorMessage(message)),
  addSuccessMessage: (message) => dispatch(addSuccessMessage(message)),
  clearMessages: () => dispatch(clearMessages()),
  userLogin: (username, password, t) => dispatch(userLogin(username, password, t)),
  toggleLoginError: (status) => dispatch(toggleLoginError(status)),
  toggleLoginModal: (status) => dispatch(toggleLoginModal(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);