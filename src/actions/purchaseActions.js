import * as types from './actionTypes';
import axios from 'axios';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function getAllPurchasesSuccess(payload) {
  return({type:types.GET_ALL_PURCHASES_SUCCESS, payload});
}

export function addTransactionSuccess(payload) {
  return({type:types.ADD_TRANSACTION_SUCCESS, payload});
}

// async call functions
export function getAllPurchases() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return axios.get('http://23.20.62.209:3000/allpurchases').then(response => {
      let payload = response.data.results;
      dispatch(getAllPurchasesSuccess(payload))
    })
    .catch(error => {
      dispatch(ajaxCallError);
      throw(error);
    })
  }
}

export function addTransaction(purchaseInfo) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    axios.post('http://23.20.62.209:3000/newpurchase',purchaseInfo).then(response =>{
        let payload = response.data.results;
        dispatch(addTransactionSuccess(payload));
      }) 
      .catch(error => {
        dispatch(ajaxCallError());
        throw(error);
      })
  }
}