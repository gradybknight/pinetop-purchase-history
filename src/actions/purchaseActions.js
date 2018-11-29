import * as types from './actionTypes';
import axios from 'axios';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function getAllPurchasesSuccess(payload) {
  return({type:types.GET_ALL_PURCHASES_SUCCESS, payload});
}
export function getAllPurchases() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    axios.get('path')
      .then(response =>{
        let payload = response.data;
        dispatch(getAllPurchasesSuccess(payload));
      }) 
      .catch(error => {
        dispatch(ajaxCallError());
        throw(error);
      })
  }
}