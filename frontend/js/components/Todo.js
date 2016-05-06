import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TodoActions from '../actions'
import TodoInput from './TodoInput'

class Todo extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    console.debug("TODO")
  }

  render() {
    const { todos, actions } = this.props
    return (
      <div className='container'>
        <h2>Todo test</h2>
        <TodoInput func={actions.addTodo} />
        {todos.map(todo =>
          <div key={todo.id}>{todo.text}</div>
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)
