import React from 'react';
import { Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  toggleLoginError,
  toggleLoginSuccess
} from '../../actions/headerActions';

const LoginAlert = (props) => {

  const closeError = () => props.toggleLoginError(false)
  const closeSuccess = () => props.toggleLoginSuccess(false)

  if (props.type === 'error' && props.header.isLoginErrorShown === true) {
    return (
      <Alert variant="secondary" onClose={ closeError } dismissible>{ props.header.loginError }</Alert>
    )
  }

  if (props.type === 'success' && props.header.isLoginSuccessShown === true) {
    return (
      <Alert variant="success" onClose={ closeSuccess } dismissible>{ props.header.loginSuccess }</Alert>
    )
  }

  return null

}

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  toggleLoginError: (status) => dispatch(toggleLoginError(status)),
  toggleLoginSuccess: (status) => dispatch(toggleLoginSuccess(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginAlert)