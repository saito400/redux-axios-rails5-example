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
    case types.RECV_ERROR:
      //TODO do something
      return state
    case types.RECV_DATA:
      //TODO hide loading message
      return action.data
    case types.REQ_DATA:
      //TODO display loading message
      return state
    default:
      return state
  }
}
