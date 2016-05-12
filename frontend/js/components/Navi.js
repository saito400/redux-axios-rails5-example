import React, {Component} from 'react';
import { Link, browserHistory } from 'react-router'

import 'bootstrap/dist/css/bootstrap.css';

class Navi extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className='navbar navbar-inverse navbar-fixed-top'>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/count">Count</Link>
              </li>
              <li>
                <Link to="/test">Test</Link>
              </li>
              <li>
                <Link to="/todo">Todo</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div style={{ marginTop: '5em' }}>{this.props.children}</div>
      </div>
    )
  }
};

export default Navi;
