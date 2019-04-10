import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    login: "",
    password: ""
  };

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.login, this.state.password);
  }

  loginChange = (event) => {
    console.log(event.target.value);
    this.setState({login: event.target.value});
  }

  passwordChange = (event) => {
    console.log(event.target.value);
    this.setState({password: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <form>
          <div>
            <label>Login</label>
            <input type="text" value={this.state.login} onChange={this.loginChange} />
          </div>
          <div>
            <label>Password</label>
            <input type="password" value={this.state.password} onChange={this.passwordChange} />
          </div>
          <button>Reset</button>
          <button onClick={this.onSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
