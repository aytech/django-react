import { combineReducers } from 'redux';
import appReducer from './appReducer';
import headerReducer from './headerReducer';

export default combineReducers({
    header: headerReducer,
    app: appReducer
})