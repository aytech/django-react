import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  clearModalMessages,
  clearUser,
  login,
  toggleLoginModal,
  updateUser
} from '../../actions/headerActions';
import './page-header.css';
import Cookies from 'universal-cookie/lib';
import AppNavbar from './navbar';
import LoginModal from './login-modal';

class PageHeader extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoggenIn: false,
      isModalOpen: false
    }
  }

  openModal = () => {
    this.setState({
      isModalOpen: true
    })
    // this.props.clearModalMessages()
    // this.props.clearUser()
    // this.props.toggleLoginModal(true)
  }

  // closeModal = () => this.props.toggleLoginModal(false)
  closeModal = () => {
    this.setState({ isModalOpen: false })
  }

  login = (t) => {
    this.props.login(this.props.header.user, t)
  }

  updateUsername = (event) => {
    this.props.updateUser({
      username: event.target.value,
      password: this.props.header.user.password
    })
  }

  updatePassword = (event) => {
    this.props.updateUser({
      username: this.props.header.user.username,
      password: event.target.value
    })
  }

  componentDidMount() {
    const cookie = new Cookies()
    if (cookie.get('token') !== undefined) {
      console.log('Figuring out if user is logged in');
    } else {
      console.log('User is not logged in');
    }
  }

  render() {
    return (
      <React.Fragment>
        <AppNavbar openModal={ this.openModal } />
        <LoginModal
          open={ this.state.isModalOpen }
          closeModal={ this.closeModal }
          login={ this.login } />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  clearModalMessages: () => dispatch(clearModalMessages()),
  clearUser: () => dispatch(clearUser()),
  login: (user, t) => dispatch(login(user, t)),
  toggleLoginModal: (status) => dispatch(toggleLoginModal(status)),
  updateUser: (user) => dispatch(updateUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(PageHeader);