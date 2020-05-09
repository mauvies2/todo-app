import React, { Component } from "react";

class TodoItem extends Component {
  todoStyle = () => {
    return {
      display: "flex",
      alignItems: "center",
      width: "50vw",
      background: "#c4c4c4",
      borderBottom: "1px solid black",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      position: "relative",
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.todoStyle()}>
        <input
          type="checkbox"
          onChange={this.props.marked.bind(this, id)}
        ></input>
        <p> {title} </p>
        <button onClick={this.props.delItem.bind(this, id)} style={btnStyle}>
          x
        </button>
      </div>
    );
  }
}

const btnStyle = {
  position: "absolute",
  right: "0",
  top: "0",
  background: "red",
  color: "white",
  border: "none",
  borderRadius: "50%",
  padding: "0.1rem 0.3rem",
  cursor: "pointer",
};

export default TodoItem;
