import React, { Component } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin: 2rem;
  input:focus,
  button:focus {
    outline: none;
    border: solid 2px red;
  }
  input {
    background: transparent;
    border: solid 2px ${props => props.theme.pink};
    color: ${props => props.theme.darkgreen};
    font-size: 2rem;
    padding: 1rem;
  }
  input::placeholder {
    color: "#ad3d45d1";
  }
  .title {
    border-radius: 8px 0 0 8px;
  }
  button {
    background: ${props => props.theme.pink};
    border: solid 2px ${props => props.theme.pink};
    border-radius: 0 8px 8px 0;
    color: ${props => props.theme.bodycolor};
    cursor: pointer;
    font-size: 2rem;
    padding: 0 1rem;
  }
  button:hover {
    background: red;
    border: solid 2px red;
    color: ${props => props.theme.darkgreen};
  }
`;

class UserInput extends Component {
  state = {
    title: "",
    body: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, body } = this.state;
    const idea = { title, body };

    this.props.addToIdeas(idea);
    this.setState({ title: "", body: "" });
  };

  render() {
    const { title, body } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <input
          className="title"
          name="title"
          value={title}
          placeholder="Title"
          type="text"
          onChange={this.handleChange}
        />
        <input
          name="body"
          value={body}
          placeholder="Body"
          type="text"
          onChange={this.handleChange}
        />
        <button type="submit">Add Item</button>
      </Form>
    );
  }
}

export default UserInput;
