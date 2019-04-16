import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";

class App extends Component {
  state = {
    action: "register"
  };

  onRegister = () => {
    this.setState({ action: "register" });
  };

  onLogin = () => {
    this.setState({ action: "login" });
  };

  render() {
    return (
      <div className="App">
        {this.state.action === "login" && (
          <Login onRegister={this.onRegister} />
        )}
        {this.state.action === "register" && (
          <Register onLogin={this.onLogin} />
        )}
      </div>
    );
  }
}

export default App;
