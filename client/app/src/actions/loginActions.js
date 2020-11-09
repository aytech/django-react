import {
  TOGGLE_LOGIN_ERROR,
  TOGGLE_LOGIN_MODAL,
  TOGGLE_LOGIN_SUCCESS,
  UPDATE_LOGIN_ERROR,
  UPDATE_LOGIN_SUCCESS
} from './constants'
import {
  HTTP_200_OK,
  HTTP_401_UNAUTHORIZED
} from '../services/HttpStatuses'
import ApiService from '../services/ApiService'
import Cookies from 'universal-cookie/lib'
import { updateUser } from './appActions'

const apiService = new ApiService();
const cookies = new Cookies()
const handleLoginSuccess = (dispatch, data, t) => {
  cookies.set('token', data.token)
  dispatch(updateUser({ username: data.username, token: data.token }))
  dispatch(toggleLoginModal(false))
}
const handleLoginError = (dispatch, error) => {
  dispatch(addErrorMessage(error))
  dispatch(toggleLoginError(true))
}

export const addErrorMessage = (message) => ({ type: UPDATE_LOGIN_ERROR, message })
export const addSuccessMessage = (message) => ({ type: UPDATE_LOGIN_SUCCESS, message })
export const toggleLoginError = (status) => ({ type: TOGGLE_LOGIN_ERROR, status })
export const toggleLoginModal = (status) => ({ type: TOGGLE_LOGIN_MODAL, status })
export const toggleLoginSuccess = (status) => ({ type: TOGGLE_LOGIN_SUCCESS, status })
export const clearMessages = () => {
  return (dispatch) => {
    dispatch(addSuccessMessage(''))
    dispatch(addErrorMessage(''))
    dispatch(toggleLoginError(false))
    dispatch(toggleLoginSuccess(false))
  }
}
export const userLogin = (username, password, t) => {
  return (dispatch) => {
    apiService
      .login(username, password)
      .then(response => {
        if (response.status === HTTP_401_UNAUTHORIZED) {
          return handleLoginError(dispatch, response.message)
        }
        if (response.status === HTTP_200_OK) {
          return handleLoginSuccess(dispatch, response, t)
        }
        handleLoginError(dispatch, t('Unexpected error, please contact administrator'))
      })
      .catch(error => {
        console.error('Fatal server error: ', error);
        handleLoginError(dispatch, t('Unexpected error, please contact administrator'))
      })
  }
}
export const userLogout = () => {
  return (dispatch) => {
    cookies.remove('token')
    dispatch(updateUser({ username: '', token: '' }))
  }
}