import React, { Component } from 'react'
import { connect } from 'react-redux'
import './page-header.css'
import Cookies from 'universal-cookie/lib'
import AppNavbar from './app-navbar'
import LoginModal from './login-modal'
import { retrieveUser } from '../../actions/appActions'

class PageHeader extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
  }

  componentDidMount() {
    const token = new Cookies().get('token')
    if (token === undefined) {
      this.setState({ isLoggedIn: false })
    } else {
      this.props.retrieveUser(token)
    }
  }

  render() {
    return (
      <React.Fragment>
        <AppNavbar />
        <LoginModal />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  retrieveUser: (token) => dispatch(retrieveUser(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(PageHeader);