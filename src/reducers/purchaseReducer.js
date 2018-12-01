import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function purchaseReducer(state = initialState.purchases, action) {
    switch(action.type) {
        case types.GET_ALL_PURCHASES_SUCCESS:
            return action.payload;
        case types.ADD_TRANSACTION_SUCCESS:
            return state;
        default:
            return state;
    }
}