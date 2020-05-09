import React, { Component } from "react";
import TodoItem from "./TodoItem";

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        marked={this.props.marked}
        delItem={this.props.delItem}
      />
    ));
  }
}
export default Todos;
