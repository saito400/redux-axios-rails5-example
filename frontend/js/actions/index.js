import * as types from '../constants'

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
