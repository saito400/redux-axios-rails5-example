import React from 'react'
import { Link, browserHistory } from 'react-router'

export default function Navi({ children }) {
  return (
    <div>
      <header>
        Links:
        {' '}
        <Link to="/">Home</Link>
        {' '}
        <Link to="/home">Home</Link>
        {' '}
        <Link to="/test">Test</Link>
      </header>
      <div>
        <button onClick={() => browserHistory.push('/test')}>Go to /test</button>
      </div>
      <div style={{ marginTop: '1.5em' }}>{children}</div>
    </div>
  )
}


