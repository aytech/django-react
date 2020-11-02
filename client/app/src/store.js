import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import appReducer from './reducers/appReducer';

const initialState = {
  state: {
    isLoginModalShown: false,
    user: {
      username: '',
      password: ''
    }
  }
};

const loggerMiddleware = createLogger();
const configureStore = (state = initialState) => {
  return createStore(
    appReducer,
    state,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    ))
};

export default configureStore;