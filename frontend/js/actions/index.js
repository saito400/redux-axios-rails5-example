import * as types from '../constants'
import axios from 'axios';

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
      })
  }
}

export function addTodo(text) {
  return function(dispatch) {
    return axios({
      url: 'http://localhost:3000/todos.json',
      method: 'post',
      data: {
        text: text,
        completed: false
      }
    })
      .then(function(response) {
        dispatch(fetchData('http://localhost:3000/todos.json'))
      })
      .catch(function(response){
        dispatch(receiveError(response.data));
      })
  }
}

export function todoStatusChange(id, completed) {
  return function(dispatch) {
    return axios({
      url: 'http://localhost:3000/todos/' + id + '.json',
      method: 'patch',
      data: {
        id: id,
        completed: completed
      }
    })
      .then(function(response) {
        dispatch(fetchData('http://localhost:3000/todos.json'))
      })
      .catch(function(response){
        dispatch(receiveError(response.data));
      })
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
