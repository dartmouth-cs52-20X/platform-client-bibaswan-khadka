/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signinUser, signupUser } from '../actions';
/* The firebase authentication was adapted from this tutorial
https://www.youtube.com/watch?v=PZquB8XdU9k
on youtube */

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
    };
  }

  handlechange= (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handlesignup= (e) => {
    e.preventDefault();
    this.props.signupUser(this.state, this.props.history);
  }

  handlesignin= (e) => {
    e.preventDefault();
    this.props.signinUser(this.state, this.props.history);
  }

  render() {
    return (
      <div>
        <form id="loginscreen">
          <input type="text" id="username" name="username" placeholder="Optional if logging in" onChange={this.handlechange} value={this.state.username} />
          <input type="email" id="email" name="email" placeholder="email" onChange={this.handlechange} value={this.state.email} />
          <input type="password" id="password" name="password" placeholder="password" onChange={this.handlechange} value={this.state.password} />
          <button type="button" onClick={this.handlesignin}>Login</button>
          <button type="button" onClick={this.handlesignup}>Signup</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { signinUser, signupUser })(login);
