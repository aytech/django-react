import { combineReducers } from 'redux';
import appReducer from './appReducer';
import loginReducer from './loginReducer';

export default combineReducers({
    login: loginReducer,
    app: appReducer
})