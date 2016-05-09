import * as types from '../constants'
import axios from 'axios';

export function addTodo(text) {
  return {
    type: types.ADD_TODO,
    text: text
  }
}

export function getTodos() {
  return {
    type: types.GET_TODOS
  }
}

export function increase(n) {
  return {
    type: types.INCREASE,
    amount: n
  }
}

export function decrease(n) {
  return {
    type: types.DECREASE,
    amount: n
  }
}

export function increase2(n) {
  return {
    type: types.INCREASE2,
    amount: n
  }
}

export function decrease2(n) {
  return {
    type: types.DECREASE2,
    amount: n
  }
}

function requestData() {
  return {
    type: types.REQ_DATA
  }
}

function receiveData(json) {
  return {
    type: types.RECV_DATA,
    data: json
  }
}

function receiveError(json) {
  return {
    type: types.RECV_ERROR,
    data: json
  }
}

export function fetchData(url) {
  return function(dispatch) {
    dispatch(requestData());
    return axios({
      url: url,
      timeout: 20000,
      method: 'get',
      responseType: 'json'
    })
      .then(function(response) {
        dispatch(receiveData(response.data));
      })
      .catch(function(response){
        dispatch(receiveError(response.data));
        dispatch(pushState(null,'/error'));
      })
  }
}
