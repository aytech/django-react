import React from 'react';
import { Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  toggleLoginError,
  toggleLoginSuccess
} from '../../actions/loginActions';

const LoginAlert = (props) => {

  const closeError = () => props.toggleLoginError(false)
  const closeSuccess = () => props.toggleLoginSuccess(false)

  if (props.type === 'error' && props.login.isErrorShown === true) {
    return (
      <Alert variant="secondary" onClose={ closeError } dismissible>{ props.login.error }</Alert>
    )
  }

  if (props.type === 'success' && props.login.isSuccessShown === true) {
    return (
      <Alert variant="success" onClose={ closeSuccess } dismissible>{ props.login.success }</Alert>
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