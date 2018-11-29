import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function purchaseReducer(state = initialState.purchases, action) {
    switch(action.type) {
        case types.GET_ALL_PURCHASES_SUCCESS:
            return [ ...state,
                Object.assign({}, ...action.payload)
            ];
        default:
            return state;
    }
}