import * as types from '../constants'

export function addTodo(text) {
  return {
    type: types.ADD_TODO,
    text: text
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
