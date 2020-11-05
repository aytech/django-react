import Cookies from 'universal-cookie/lib'
import {
  TOGGLE_LOGIN_ERROR,
  TOGGLE_LOGIN_MODAL,
  TOGGLE_LOGIN_SUCCESS,
  UPDATE_LOGIN_ERROR,
  UPDATE_LOGIN_SUCCESS,
  UPDATE_USER
} from './constants'
import ApiService from '../services/ApiService'
import { is_user_valid } from '../services/Validator'
import {
  HTTP_200_OK,
  HTTP_401_UNAUTHORIZED
} from '../services/HttpStatuses'

const cookies = new Cookies()
const apiService = new ApiService();
const handleLoginError = (dispatch, error) => {
  dispatch(loginErrorMessage(error))
  dispatch(toggleLoginSuccess(false))
  dispatch(toggleLoginError(true))
}
const handleLoginSuccess = (dispatch, token, t) => {
  cookies.set('token', token)
  dispatch(loginSuccessMessage(t('Login successful')))
  dispatch(toggleLoginError(false))
  dispatch(toggleLoginSuccess(true))
  dispatch(toggleLoginModal(false))
  dispatch(clearUser())
}

export const toggleLoginError = (status) => ({ type: TOGGLE_LOGIN_ERROR, status })
export const toggleLoginModal = (status) => ({ type: TOGGLE_LOGIN_MODAL, status })
export const toggleLoginSuccess = (status) => ({ type: TOGGLE_LOGIN_SUCCESS, status })
export const loginErrorMessage = (message) => ({ type: UPDATE_LOGIN_ERROR, message })
export const loginSuccessMessage = (message) => ({ type: UPDATE_LOGIN_SUCCESS, message })
export const updateUser = (user) => ({ type: UPDATE_USER, user })
export const clearModalMessages = () => {
  return (dispatch) => {
    dispatch(loginSuccessMessage(''))
    dispatch(loginErrorMessage(''))
    dispatch(toggleLoginError(false))
    dispatch(toggleLoginSuccess(false))
  }
}
export const clearUser = () => {
  return (dispatch) => {
    dispatch(updateUser({ username: '', password: '' }))
  }
}
export const login = (user, t) => {
  return (dispatch) => {
    if (is_user_valid(user)) {
      apiService
        .login(user)
        .then(response => {
          if (response.status === HTTP_401_UNAUTHORIZED) {
            return handleLoginError(dispatch, response.message)
          }
          if (response.status === HTTP_200_OK) {
            return handleLoginSuccess(dispatch, response.token, t)
          }
          handleLoginError(dispatch, t('Unexpected error, please contact administrator'))
        })
        .catch(error => {
          console.error('Fatal server error: ', error);
          handleLoginError(dispatch, t('Unexpected error, please contact administrator'))
        })
    } else {
      dispatch(loginErrorMessage(t('Please provide username and pasword')))
      dispatch(toggleLoginError(true))
    }
  }
}