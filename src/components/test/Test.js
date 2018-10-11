import React, { Component } from "react";

class Test extends Component {
  state = {
    id: "",
    title: "",
    body: ""
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }
  componentWillMount() {
    console.log("Component will mount");
  }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>Test Component</h1>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
