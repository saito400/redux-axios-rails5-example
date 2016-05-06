import { INCREASE, DECREASE, INCREASE2, DECREASE2 } from '../constants'

const initialState = {
  number: 1,
  number2: 2
}

export default function update(state = initialState, action) {
  if(action.type === INCREASE) {
    return {
        number: state.number + action.amount,
        number2: state.number2
    }
  }
  else if(action.type === DECREASE) {
    return {
        number: state.number - action.amount,
        number2: state.number2
    }
  }
  else if(action.type === INCREASE2) {
    return {
        number: state.number,
        number2: state.number2 + action.amount
    }
  }
  else if(action.type === DECREASE2) {
    return {
        number: state.number,
        number2: state.number2 - action.amount
    }
  }

  return state
}
