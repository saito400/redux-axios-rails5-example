import React from 'react'
import { Link, browserHistory } from 'react-router'

import 'bootstrap/dist/css/bootstrap.css';

export default function Navi({ children }) {
  return (
    <div>
      <nav className='navbar navbar-inverse navbar-fixed-top'>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/test">Test</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div style={{ marginTop: '5em' }}>{children}</div>
    </div>
  )
}


