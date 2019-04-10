import React, { Component } from 'react';
import Button from './Button';

class Login extends Component {

    state = {
        login: "",
        password: ""
      };
    
      onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.login, this.state.password);
      }
    
      loginChange = (event) => {
        this.setState({login: event.target.value});
      }
    
      passwordChange = (event) => {
        this.setState({password: event.target.value});
      }
    
      render() {
        return (
            <form>
              <div>
                <label>Login</label>
                <input type="text" value={this.state.login} onChange={this.loginChange} />
              </div>
              <div>
                <label>Password</label>
                <input type="password" value={this.state.password} onChange={this.passwordChange} />
              </div>
              <Button text="Reset" />
              <Button text="Submit" onClick={this.onSubmit} />
              {/* <button onClick={this.onSubmit}>Submit</button> */}
            </form>
        );
      }
}

export default Login;