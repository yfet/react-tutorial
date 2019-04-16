import React, { Component } from "react";
import Button from "./Button";
import "./Login.css";

class Register extends Component {
  state = {
    firstname: "",
    lastname: "",
    login: "",
    password: ""
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    event.preventDefault();
  };

  onLogin = event => {
    event.preventDefault();
    this.props.onLogin && this.props.onLogin();
  };

  render() {
    return (
      <form className="register-form">
        <div className="form-row">
          <label className="form-label" htmlFor="lastname">
            Lastname
          </label>
          <input
            className="form-control"
            type="text"
            name="lastname"
            id="lastname"
            placeholder="lastname"
            value={this.state.lastname}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="firstname">
            Firstname
          </label>
          <input
            className="form-control"
            type="text"
            name="firstname"
            id="firstname"
            placeholder="firstname"
            value={this.state.firstname}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="login">
            Login
          </label>
          <input
            className="form-control"
            type="text"
            name="login"
            id="login"
            placeholder="email ou nom d'utilisateur"
            value={this.state.login}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            name="password"
            id="password"
            placeholder="mot de passe"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="action-container">
          <Button text="Se connecter" onClick={this.onLogin} />
          <Button text="Submit" onClick={this.onSubmit} color="primary" />
        </div>
      </form>
    );
  }
}

export default Register;
