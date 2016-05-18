import React, {Component} from 'react';

class TodoSearch extends Component {

  constructor(props){
    super(props);
    this.handle = this.handle.bind(this)
  }

  handle() {
    this.props.func(document.getElementById('search').value)
  }

  render() {

    return (
      <div className='form-inline'>
        <div className='form-group'>
          <input
            className='form-control'
            id="search"
            placeholder="search text"
            type="text" />
        </div>
        <button onClick={this.handle} className='btn btn-default'>
          Search Todo
        </button>
      </div>
    )
  }
}

export default TodoSearch
