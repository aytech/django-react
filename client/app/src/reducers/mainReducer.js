import {
  TOGGLE_LOGIN_MODAL,
  UPDATE_USER
} from '../actions/constants';

const mainReducer = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_LOGIN_MODAL:
      return {
        ...state,
        isLoginModalShown: action.status
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

export default mainReducer