import React from "react";
import axios from "axios";

export default class PersonAdd extends React.Component {
  state = {
    name: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      password: this.state.password,
    };

    console.log(user);
    axios
      .post(`http://localhost:3000/users`, { user })
      .then((res) => {
        console.log(res);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            
            <input type="text" name="name" onChange={this.handleChange} />

            Person Password :
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
