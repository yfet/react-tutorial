import React, { Component } from "react";
import "firebase/auth";
import firebase from "./firebase";
import UserContext from "./components/UserContext";

import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";

class App extends Component {
  state = {
    currentUSer: null,
    action: "login"
  };

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ currentUSer: user });
    });
  }

  onRegister = () => {
    this.setState({ action: "register" });
  };

  onLogin = () => {
    this.setState({ action: "login" });
  };

  render() {
    return (
      <UserContext.Provider value={{ currentUser: this.state.currentUSer }}>
        <div className="App">
          {this.state.action === "login" && (
            <Login onRegister={this.onRegister} />
          )}
          {this.state.action === "register" && (
            <Register onLogin={this.onLogin} />
          )}
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
