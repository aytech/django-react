import {
  UPDATE_USER
} from './constants'

export const updateUser = (user) => ({ type: UPDATE_USER, user })
export const clearUser = () => {
  return (dispatch) => {
    dispatch(updateUser({ username: '', password: '' }))
  }
}