import {
    TOGGLE_LOGIN_ERROR,
    TOGGLE_LOGIN_MODAL,
    TOGGLE_LOGIN_SUCCESS,
    UPDATE_LOGIN_ERROR,
    UPDATE_LOGIN_SUCCESS,
    UPDATE_USER
} from './constants';
import ApiService from '../services/ApiService';

const apiService = new ApiService();

export const toggleLoginError = (status) => ({ type: TOGGLE_LOGIN_ERROR, status })
export const toggleLoginModal = (status) => ({ type: TOGGLE_LOGIN_MODAL, status })
export const toggleLoginSuccess = (status) => ({ type: TOGGLE_LOGIN_SUCCESS, status })
export const loginErrorMessage = (message) => ({type: UPDATE_LOGIN_ERROR, message})
export const loginSuccessMessage = (message) => ({type: UPDATE_LOGIN_SUCCESS, message})
export const updateUser = (user) => ({ type: UPDATE_USER, user })
export const login = (user) => {
    return (dispatch) => {
        apiService
            .login(user)
            .then(response => console.log(`Response: ${response}`))
            .catch(error => {
                dispatch(loginErrorMessage(error.message))
                dispatch(toggleLoginError(true))
                console.log(`Error: ${error}`)
            })
    }
}