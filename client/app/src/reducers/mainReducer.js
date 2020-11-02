import { TOGGLE_LOGIN_MODAL } from '../actions/constants';

const mainReducer = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_LOGIN_MODAL:
      return {
        ...state,
        isLoginModalShown: action.status
      }
    default:
      return state;
  }
}

export default mainReducer