import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import { Link } from 'react-router-dom';
import { createPost } from '../actions';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: ' ',
      Tags: ' ',
      Content: ' ',
      CoverImageURL: ' ',
      notfilled: false,
    };
  }

  onInputChange = (event) => {
    // eslint-disable-next-line no-unused-vars
    const key = `${event.target.name}`;
    // eslint-disable-next-line react/no-unused-state
    this.setState({ [key]: event.target.value });
  }

  reminder = () => {
    if (this.state.notfilled === true) {
      return (
        <div>
          <p>Please enter Title</p>
        </div>
      );
    } else {
      return (
        <p />
      );
    }
  }

  createpost = () => {
    if (this.state.Title === ' ') {
      this.setState({ notfilled: true });
    } else {
      const post = {
        title: this.state.Title, content: this.state.Content, coverUrl: this.state.CoverImageURL, tags: this.state.Tags,
      };
      console.log(post);
      this.props.createPost(post, this.props.history);
    }
  }

  render() {
    return (
      <form>
        <h1>Create A New Post</h1>
        <h2>Title</h2>
        <input type="text" name="Title" onChange={this.onInputChange} value={this.state.Title} />
        <h2>Tags</h2>
        <input type="text" name="Tags" onChange={this.onInputChange} value={this.state.Tags} />
        <h2>Content</h2>
        <TextareaAutosize type="text" name="Content" onChange={this.onInputChange} value={this.state.Content} />
        <h2>Cover Image</h2>
        <input type="text" name="CoverImageURL" onChange={this.onInputChange} value={this.state.CoverImageURL} />
        <div>
          <Link to="/"><button type="button">Discard</button></Link>
          <button onClick={this.createpost} type="button">Create</button>
        </div>
        <this.reminder />
      </form>
    );
  }
}

export default connect(null, { createPost })(NewPost);
