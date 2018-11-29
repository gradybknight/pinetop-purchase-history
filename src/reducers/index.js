import {combineReducers} from 'redux';
import purchases from './purchaseReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    purchases,
    ajaxCallsInProgress
});

export default rootReducer;