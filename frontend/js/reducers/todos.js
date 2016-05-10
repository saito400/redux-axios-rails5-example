import * as types from '../constants'

const initialState = [
//  {
//    text: 'Use Redux',
//    completed: false,
//    id: 9998
//  },
//  {
//    text: 'Use Redux2',
//    completed: false,
//    id: 9999
//  }
]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        },
        ...state
      ]
      case types.RECV_ERROR:
        //TODO do something
        return state
      case types.RECV_DATA:
        return state.concat(action.data)
      case types.REQ_DATA:
        return state
    default:
      return state
  }
}
