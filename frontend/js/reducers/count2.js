import { INCREASE2, DECREASE2 } from '../constants'

const initialState = {
  number: 2
}

export default function update(state = initialState, action) {
  if(action.type === INCREASE2) {
    return {
        number: state.number + action.amount
    }
  }
  else if(action.type === DECREASE2) {
    return {
        number: state.number - action.amount
    }
  }

  return state
}
