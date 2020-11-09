import {
  UPDATE_USER
} from './constants'
import ApiService from '../services/ApiService'
import { HTTP_200_OK } from '../services/HttpStatuses'

const apiService = new ApiService();

export const updateUser = (user) => ({ type: UPDATE_USER, user })
export const retrieveUser = (token) => {
  return (dispatch) => {
    apiService
      .getUser(token)
      .then(response => {
        if (response.status === HTTP_200_OK) {
          dispatch(updateUser({ username: response.username, token }))
        }
      })
      .catch(error => {
        console.error(`Error fetching user: ${error}`);
        dispatch(updateUser({ username: '', token: '' }))
      })
  }
}