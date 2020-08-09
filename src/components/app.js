import React from 'react';
import '../style.scss';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';
import NewPost from './newpost';
import Posts from './posts';
import Post from './post';
import 'bootstrap/dist/css/bootstrap.min.css';
import searchposts from './searchpost';

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/searchposts">Search</NavLink></li>
        <li><NavLink to="/">Posts</NavLink></li>
        <li><NavLink to="/posts/new">Add note</NavLink></li>
      </ul>
    </nav>
  );
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/posts/new" component={NewPost} />
          <Route path="/posts/:postID" component={Post} />
          <Route path="/searchposts" component={searchposts} />
          <Route render={() => (<div>post not found </div>)} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
