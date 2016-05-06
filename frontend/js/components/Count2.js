import React from 'react'
import { connect } from 'react-redux'
import { increase2, decrease2 } from '../actions'

function Count2({ number, increase2, decrease2 }) {
  return (
    <div className='container'>
      Some state changes:
      {number}
      <button onClick={() => increase2(1)}>Increase</button>
      <button onClick={() => decrease2(1)}>Decrease</button>
    </div>
  )
}

export default connect(
  state => ({ number: state.count.number2 }),
  { increase2, decrease2 }
)(Count2)

