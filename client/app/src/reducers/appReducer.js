import {
  UPDATE_USER
} from '../actions/constants'

const appReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        user: action.user
      }
    default:
      return state
  }
}

export default appReducer