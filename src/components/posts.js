import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Carousel } from 'react-bootstrap';
import { fetchPosts } from '../actions';

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const allPostsItems = this.props.allPosts.map((post) => {
      return (
        <Carousel.Item key={post.id}>
          <Link key={post.id} to={`posts/${post.id}`}>
            <Card style={{ width: '40rem' }} className="box container-fluid bg-dark text-white">
              <Card.Img variant="top" src={`${post.coverUrl}`} alt="" />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                  {post.tags}
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Carousel.Item>
      );
    });

    return (
      <Carousel>
        { allPostsItems }
      </Carousel>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  allPosts: reduxState.posts.all,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
