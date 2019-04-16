import React, { Component } from "react";
import Button from "./Button";
import "./Login.css";

class Register extends Component {
  state = {
    submitting: false,
    values: {
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    },
    errors: {}
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    const errors = { ...this.state.errors, [name]: null };
    const values = { ...this.state.values, [name]: value };
    this.setState({ values, errors });
  };

  onSubmit = event => {
    event.preventDefault();
    const valid = this.validate();
    if (valid) {
      this.setState({ submitting: true });
      setTimeout(() => {
        this.setState({ submitting: false });
      }, 5000);
    }
  };

  onLogin = event => {
    event.preventDefault();
    this.props.onLogin && this.props.onLogin();
  };

  validate = () => {
    const values = this.state.values;
    let errors = {};
    let valid = true;
    if (!values.firstname) {
      errors.firstname = "ce champ est obligatoire";
      valid = false;
    }
    if (!values.lastname) {
      errors.lastname = "ce champ est obligatoire";
      valid = false;
    }

    if (!values.email || !values.email.includes("@")) {
      errors.email = "email incorrect";
      valid = false;
    }
    if (!values.password || values.password.length < 6) {
      errors.password = "mot de passe trop court";
      valid = false;
    }
    this.setState({ errors });
    return valid;
  }

  render() {
    return (
      <form className="register-form">
        <div className="form-row">
          <label className="form-label" htmlFor="lastname">
            Lastname
          </label>
          <input
            className={"form-control " + (this.state.errors.lastname ? "with-errors" : "")}
            type="text"
            name="lastname"
            id="lastname"
            placeholder="lastname"
            value={this.state.values.lastname}
            onChange={this.handleInputChange}
          />
        </div>
        {this.state.errors.lastname && <div className="errors">{this.state.errors.lastname}</div>}
        <div className="form-row">
          <label className="form-label" htmlFor="firstname">
            Firstname
          </label>
          <input
            className={"form-control " + (this.state.errors.firstname ? "with-errors" : "")}
            type="text"
            name="firstname"
            id="firstname"
            placeholder="firstname"
            value={this.state.values.firstname}
            onChange={this.handleInputChange}
          />
        </div>
        {this.state.errors.firstname && <div className="errors">{this.state.errors.firstname}</div>}
        <div className="form-row">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className={"form-control " + (this.state.errors.email ? "with-errors" : "")}
            type="text"
            name="email"
            id="email"
            placeholder="email ou nom d'utilisateur"
            value={this.state.values.email}
            onChange={this.handleInputChange}
          />
        </div>
        {this.state.errors.email && <div className="errors">{this.state.errors.email}</div>}
        <div className="form-row">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            className={"form-control " + (this.state.errors.password ? "with-errors" : "")}
            type="password"
            name="password"
            id="password"
            placeholder="mot de passe"
            value={this.state.values.password}
            onChange={this.handleInputChange}
          />
        </div>
        {this.state.errors.password && <div className="errors">{this.state.errors.password}</div>}
        <div className="action-container">
          <Button text="Se connecter" onClick={this.onLogin} />
          <Button text="Créer" onClick={this.onSubmit} color="primary" loading={this.state.submitting} />
        </div>
      </form>
    );
  }
}

export default Register;
