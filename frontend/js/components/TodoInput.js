import React, {Component} from 'react';

class TodoInput extends Component {

  constructor(props){
    super(props);
    this.handle = this.handle.bind(this)
  }

  handle() {
    this.props.func(document.getElementById('todotext').value)
  }

  render() {
    return (
      <div className='form-inline'>
        <div className='form-group'>
          <input
            className='form-control'
            id="todotext"
            placeholder="Todo"
            type="text" />
        </div>
        <button onClick={this.handle} className='btn btn-default'>
          Add Todo
        </button>
      </div>
    )
  }
}

export default TodoInput
