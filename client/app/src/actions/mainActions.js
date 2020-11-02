import {
    TOGGLE_LOGIN_MODAL,
    UPDATE_USER
} from './constants';
import ApiService from '../services/ApiService';

const apiService = new ApiService();

export const toggleLoginModal = (status) => ({ type: TOGGLE_LOGIN_MODAL, status })
export const updateUser = (user) => ({ type: UPDATE_USER, user })
export const login = (user) => {
    return (dispatch) => {
        apiService
            .login(user)
            .then(response => console.log(`Response: ${response}`))
            .catch(error => console.log(`Error: ${error}`))
    }
}