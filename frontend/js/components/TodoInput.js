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
      <div>
        <input
          id="todotext"
          type="text" />
          <button onClick={this.handle}>
            Add Todo
          </button>
      </div>
    )
  }
}

export default TodoInput
