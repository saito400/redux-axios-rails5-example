import React, {Component} from 'react';

class Todo extends Component {

  constructor(props){
    super(props);
    this.handle = this.handle.bind(this)
  }

  handle() {
    console.debug('handle ' + this.props.todoid)
    console.debug('handle ' + this.props.completed)
  }

  render() {

    const s = (this.props.completed) ? {textDecoration: 'line-through'} : {textDecoration: 'none'}

    return (
      <div onClick={this.handle}  style={s}>{this.props.text}</div>
    )
  }
}

export default Todo
