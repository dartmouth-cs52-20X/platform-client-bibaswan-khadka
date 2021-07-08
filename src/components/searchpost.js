import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardDeck } from 'react-bootstrap';
import Fuse from 'fuse.js';
import { fetchPosts } from '../actions';

class SearchPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchterm: ' ',
      filtered: [],
    };
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  search = () => {
    const options = {
      includeScore: false,
      // Search in `author` and in `tags` array
      keys: ['title', 'tags'],
    };
    const fuse = new Fuse(this.props.allPosts, options);

    // eslint-disable-next-line react/no-access-state-in-setstate
    const result = fuse.search(this.state.searchterm);
    this.setState({ filtered: result });
  }

  updateSearchTerm= (event) => {
    this.setState({ searchterm: event.target.value });
  };

  render() {
    const allPostsItems = this.state.filtered.map((post) => {
      return (
        <Link key={post.item.id} to={`posts/${post.item.id}`}>
          <Card style={{ width: '18rem' }} className="box container-fluid bg-dark text-white">
            <Card.Img variant="top" src={`${post.item.coverUrl}`} alt="" />
            <Card.Body>
              <Card.Title>{post.item.title}</Card.Title>
              <Card.Text>
                {post.item.tags.join(' ')}
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      );
    });

    return (
      <div>
        <div id="search">
          <input onChange={this.updateSearchTerm} value={this.state.searchterm} />
          <button onClick={this.search} type="button">Search</button>
        </div>
        <CardDeck>
          { allPostsItems }
        </CardDeck>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  allPosts: reduxState.posts.all,
});

export default connect(mapStateToProps, { fetchPosts })(SearchPosts);
