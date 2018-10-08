import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import TodosList from '../../components/TodosList/TodosList';
import AddTodo from '../../components/AddTodo/AddTodo';

class App extends Component {

  state = {
    todos : []
  }

  deleteTodo = (id) => {
    console.log(id);
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    }) 
    this.setState({
      todos
    })
  }

  addTodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
      todos : todos
    })
  }

  render() {
    return (

      <div>

        <Header />

        <AddTodo
        addTodo={this.addTodo}
        />

        <TodosList
        todos={this.state.todos}
        deleteTodo={this.deleteTodo}
        />  
      
      </div>
            
    );
  }
}

export default App;
