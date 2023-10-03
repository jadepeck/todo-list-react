import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css'

class TodoList extends Component {
  state = {
    todos: [],
    newTodo: '',
  };

  handleInputChange = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  addTodo = () => {
    if (this.state.newTodo.trim() === '') return;
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({ todos: todos, newTodo: '' });
  };

  deleteTodo = (index) => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos});
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.newTodo}
          onChange={this.handleInputChange}
        />
        <button onClick={this.addTodo}>Add</button>
        <ul>
          {this.state.todos.map((todo, index) => (
            <TodoItem
            key={index}
            text={todo}
            onDelete={() => this.deleteTodo(index)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
