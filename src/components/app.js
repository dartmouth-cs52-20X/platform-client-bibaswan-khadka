import React, { Component } from 'react';
import '../style.scss';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import NewPost from './newpost';
import Posts from './posts';
import Post from './post';
import 'bootstrap/dist/css/bootstrap.min.css';
import searchposts from './searchpost';
import login from './sigin';
import { signoutUser } from '../actions';
import PrivateRoute from './privateRoute';

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  rendernav = (props) => {
    return (
      <nav>
        <ul>
          <li><NavLink to="/searchposts">Search</NavLink></li>
          <li><NavLink to="/">Posts</NavLink></li>
          <li><NavLink to="/posts/new">Add note</NavLink></li>
          {this.showsignin()}
        </ul>
      </nav>
    );
  };

  logouthandler= (event) => {
    event.preventDefault();
    this.props.signoutUser(this.props.history);
  }

  showsignin() {
    if (this.props.loggedinstate) {
      return <li onClick={this.logouthandler}>SignOut</li>;
    } else {
      return <li><NavLink to="/signup">Login</NavLink></li>;
    }
  }

  render() {
    return (
      <Router>
        <div>
          {this.rendernav()}
          <Switch>
            <Route exact path="/" component={Posts} />
            <PrivateRoute path="/posts/new" component={NewPost} />
            <Route path="/posts/:postID" component={Post} />
            <Route path="/searchposts" component={searchposts} />
            <Route path="/signup" component={login} />
            <Route render={() => (<div>Error </div>)} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => (
  {
    loggedinstate: state.auth.authenticated,
  }
);

export default connect(mapStateToProps, { signoutUser })(App);
