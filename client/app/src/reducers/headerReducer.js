import {
  TOGGLE_LOGIN_ERROR,
  TOGGLE_LOGIN_MODAL,
  TOGGLE_LOGIN_SUCCESS,
  UPDATE_LOGIN_ERROR,
  UPDATE_LOGIN_SUCCESS,
  UPDATE_USER
} from '../actions/constants';

const headerReducer = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_LOGIN_ERROR:
      return {
        ...state,
        isLoginErrorShown: action.status
      }
    case TOGGLE_LOGIN_MODAL:
      return {
        ...state,
        isLoginModalShown: action.status
      }
    case TOGGLE_LOGIN_SUCCESS:
      return {
        ...state,
        isLoginSuccessShown: action.status
      }
    case UPDATE_LOGIN_ERROR:
      return {
        ...state,
        loginError: action.message
      }
    case UPDATE_LOGIN_SUCCESS:
      return {
        ...state,
        loginSuccess: action.message
      }
    case UPDATE_USER:
      return {
        ...state,
        user: action.user
      }
    default:
      return state;
  }
}

export default headerReducer