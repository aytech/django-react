import {
  TOGGLE_LOGIN_MODAL,
  TOGGLE_LOGIN_ERROR,
  TOGGLE_LOGIN_SUCCESS,
  UPDATE_LOGIN_ERROR,
  UPDATE_LOGIN_SUCCESS
} from '../actions/constants';

const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_LOGIN_ERROR:
      return {
        ...state,
        isErrorShown: action.status
      }
    case TOGGLE_LOGIN_MODAL:
      return {
        ...state,
        isModalShown: action.status
      }
    case TOGGLE_LOGIN_SUCCESS:
      return {
        ...state,
        isSuccessShown: action.status
      }
    case UPDATE_LOGIN_ERROR:
      return {
        ...state,
        error: action.message
      }
    case UPDATE_LOGIN_SUCCESS:
      return {
        ...state,
        success: action.message
      }
    default:
      return state;
  }
}

export default loginReducer