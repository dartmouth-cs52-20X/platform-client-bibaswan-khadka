import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardDeck } from 'react-bootstrap';
import { fetchPosts } from '../actions';

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const allPostsItems = this.props.allPosts.map((post) => {
      return (
        <Link key={post.id} to={`posts/${post.id}`}>
          <Card style={{ width: '18rem' }} className="box">
            <Card.Img variant="top" src={`${post.coverUrl}`} alt="" />
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>
                {post.tags}
              </Card.Text>
            </Card.Body>
          </Card>
          {/* <div>
            <img src={`${post.coverUrl}`} alt="" />
            <h2>{post.title}</h2>
            <h2>{post.tags}</h2>
          </div> */}
        </Link>
      );
    });

    return (
      <CardDeck>
        { allPostsItems }
      </CardDeck>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  allPosts: reduxState.posts.all,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
