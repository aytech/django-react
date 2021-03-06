import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import mainReducer from './reducers/mainReducer';

const initialState = {
  login: {
    isErrorShown: false,
    isModalShown: false,
    isSuccessShown: false,
    error: '',
    success: ''
  },
  app: {
    user: {
      username: '',
      token: ''
    }
  }
};

const loggerMiddleware = createLogger();
const configureStore = (state = initialState) => {
  return createStore(
    mainReducer,
    state,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    ))
};

export default configureStore;