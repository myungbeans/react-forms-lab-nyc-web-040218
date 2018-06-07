import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "" ,
      password: ""
    };
  }

  handleUsername = (event) => {
    const username = event.target.value
    this.setState({
      username
    })
  }

  handlePassword = (event) => {
    const password = event.target.value
    this.setState({
      password
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.state.username[0] && this.state.password[0] ? console.log("true") : console.log("false")
    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.handleUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.handlePassword}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
