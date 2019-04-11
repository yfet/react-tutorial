import React, { Component } from "react";
import Button from "./Button";
import "./Login.css";

class Login extends Component {
  state = {
    login: "",
    password: ""
  };

  onSubmit = event => {
    event.preventDefault();
    console.log(this.state.login, this.state.password);
  };

  loginChange = event => {
    this.setState({ login: event.target.value });
  };

  passwordChange = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <form className="login-form">
        <div className="form-row">
          <label className="form-label" htmlFor="login">Login</label>
          <input
            className="form-control"
            type="text"
            name="login"
            id="login"
            placeholder="email ou nom d'utilisateur"
            value={this.state.login}
            onChange={this.loginChange}
          />
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="password">Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            id="password"
            placeholder="mot de passe"
            value={this.state.password}
            onChange={this.passwordChange}
          />
        </div>
        <div className="action-container">
          <Button text="Reset" />
          <Button text="Submit" onClick={this.onSubmit} color="primary" />
        </div>
      </form>
    );
  }
}

export default Login;
