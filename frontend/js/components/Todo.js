import React, {Component} from 'react';

class Todo extends Component {

  constructor(props){
    super(props);
    this.handle = this.handle.bind(this)
  }

  handle() {
    console.debug('handle ' + this.props.todoid)
  }

  render() {
    return (
      <div onClick={this.handle}>{this.props.text}</div>
    )
  }
}

export default Todo
