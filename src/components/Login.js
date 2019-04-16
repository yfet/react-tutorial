import React, { Component } from "react";
import "firebase/auth";
import firebase from "../firebase";
import UserContext from "./UserContext";

import Button from "./Button";
import "./Login.css";

class Login extends Component {
  state = {
    submitting: false,
    values: {
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
    this.setState({ errors: {} });
    const valid = this.validate();
    if (valid) {
      firebase
        .auth()
        .signInWithEmailAndPassword(
          this.state.values.email,
          this.state.values.password
        )
        .then(user => {
          // console.log(user);
        })
        .catch(error => console.error(error));
    }
  };

  onRegister = event => {
    event.preventDefault();
    this.props.onRegister && this.props.onRegister();
  };

  signOut = () => {
    firebase.auth().signOut();
  };

  validate = () => {
    const values = this.state.values;
    let errors = {};
    let valid = true;
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
  };

  render() {
    return (
      <UserContext.Consumer>
        {({ currentUser }) => {
          return (
            <form className="login-form">
              {currentUser && (
                <div>
                  <div>Vous êtes connecté en tant que: {currentUser.email}</div>
                  <span
                    onClick={this.signOut}
                    style={{ color: "blue", cursor: "pointer" }}
                  >
                    Se Déconnecter
                  </span>
                </div>
              )}
              <div className="form-row">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  className={
                    "form-control " +
                    (this.state.errors.email ? "with-errors" : "")
                  }
                  type="text"
                  name="email"
                  id="email"
                  placeholder="email ou nom d'utilisateur"
                  value={this.state.values.email}
                  onChange={this.handleInputChange}
                />
              </div>
              {this.state.errors.email && (
                <div className="errors">{this.state.errors.email}</div>
              )}
              <div className="form-row">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  className={
                    "form-control " +
                    (this.state.errors.password ? "with-errors" : "")
                  }
                  type="password"
                  name="password"
                  id="password"
                  placeholder="mot de passe"
                  value={this.state.values.password}
                  onChange={this.handleInputChange}
                />
              </div>
              {this.state.errors.password && (
                <div className="errors">{this.state.errors.password}</div>
              )}
              <div className="action-container">
                <Button text="Créer un compte" onClick={this.onRegister} />
                <Button
                  text="Connecter"
                  onClick={this.onSubmit}
                  color="primary"
                  loading={this.state.submitting}
                />
              </div>
            </form>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default Login;
