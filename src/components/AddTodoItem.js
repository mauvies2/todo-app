import React, { Component } from "react";

export class AddTodoItem extends Component {
  state = {
    title: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.title);
    this.setState({ title: "" });
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Add item..."
          style={inputStyle}
          value={this.state.title}
          onChange={this.onChange}
        ></input>
        <input type="submit" value="Submit" className="submit"></input>
      </form>
    );
  }
}
const inputStyle = {
  display: "flex",
  alignItems: "center",
  width: "50vw",
  background: "#c4c4c4",
  border: "none",
  borderBottom: "1px solid black",
};
export default AddTodoItem;
