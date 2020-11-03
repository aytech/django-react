import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import mainReducer from './reducers/mainReducer';

const initialState = {
  header: {
    isLoginModalShown: false,
    user: {
      username: '',
      password: ''
    }
  },
  app: {}
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