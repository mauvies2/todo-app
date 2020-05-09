import React, { Component } from "react";
import Todos from "./components/Todos";
import "./App.css";
import AddTodoItem from "./components/AddTodoItem";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Surf in afternoon",
        completed: false,
      },
      {
        id: 2,
        title: "Cook pizza",
        completed: false,
      },
      {
        id: 3,
        title: "Go to the grocery store",
        completed: false,
      },
    ],
  };
  marked = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  delItem = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  addItem = (title) => {
    const newTodo = {
      id: Math.random(100),
      title: title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div className="App">
        <Todos
          todos={this.state.todos}
          marked={this.marked}
          delItem={this.delItem}
        />
        <AddTodoItem addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
