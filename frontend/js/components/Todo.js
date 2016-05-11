import React, {Component} from 'react';

class Todo extends Component {

  constructor(props){
    super(props);
    this.handle = this.handle.bind(this)
  }

  handle() {
    this.props.toggle(this.props.todoid, (this.props.completed) ? false : true)
  }

  render() {

    const s = (this.props.completed) ? {textDecoration: 'line-through'} : {textDecoration: 'none'}

    return (
      <div onClick={this.handle}  style={s}>{this.props.text}</div>
    )
  }
}

export default Todo
