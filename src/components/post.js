/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-danger */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import marked from 'marked';
import {
  errorclear, updatePost, fetchPost, deletePost,
} from '../actions';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ' ',
      content: ' ',
      tags: [],
      isEditing: false,
    };
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postID);
  }

  componentWillUnmount() {
    this.props.errorclear();
  }

  update= (event) => {
    // eslint-disable-next-line no-unused-vars
    const key = `${event.target.name}`;
    // eslint-disable-next-line react/no-unused-state
    this.setState({ [key]: event.target.value });
  }

  updateTitle= (event) => {
    // eslint-disable-next-line no-unused-vars
    const key = `${event.target.name}`;
    // eslint-disable-next-line react/no-unused-state
    this.setState({ [key]: event.target.value.split(' ') });
  }

  updateServer= () => {
    const post = {
      id: this.props.currentPost.id, title: this.state.title, content: this.state.content, coverUrl: this.props.currentPost.coverUrl, tags: this.state.tags,
    };
    console.log(post);
    this.props.updatePost(post);
  }

  editmodehandler = () => {
    if (this.props.iserror) {
      return (
        <h1>You may need to login or the post may not exist</h1>
      );
    }
    if (this.state.isEditing) {
      return (
        <div id="editing">
          <input name="title" onChange={this.update} value={this.state.title} />
          <input name="tags" onChange={this.updateTitle} value={this.state.tags.join(' ')} />
          <TextareaAutosize name="content" onChange={this.update} value={this.state.content} />
        </div>
      );
    } else {
      return (
        <div id="notediting">
          <h1>{this.props.currentPost.title}</h1>
          <h6>{this.props.currentPost.tags && this.props.currentPost.tags.join(' ')}</h6>
          <div className="noteBody" dangerouslySetInnerHTML={{ __html: marked(this.props.currentPost.content || '') }} />
        </div>
      );
    }
  }

  toggleedit= () => {
    if (this.state.isEditing) {
      this.setState({ isEditing: false });
      this.updateServer();
    } else {
      this.setState({ title: this.props.currentPost.title });
      this.setState({ content: this.props.currentPost.content });
      this.setState({ tags: this.props.currentPost.tags });
      this.setState({ isEditing: true });
    }
  }

    deleteItem = () => {
      this.props.deletePost(this.props.match.params.postID, this.props.history);
    };

    buttonrender= () => {
      if (this.props.iserror) {
        return (
          <h1>Error</h1>
        );
      } else {
        return (
          <div className="buttons">
            <button onClick={this.deleteItem} type="button">Delete</button>
            <button onClick={this.toggleedit} type="button">Edit</button>
          </div>
        );
      }
    }

    render() {
      return (
        <div id="content">
          <this.buttonrender />
          <this.editmodehandler />
        </div>
      );
    }
}

function mapStateToProps(reduxState) {
  return {
    currentPost: reduxState.posts.current,
    iserror: reduxState.errorcheck.error,
  };
}

export default connect(mapStateToProps, {
  errorclear, updatePost, fetchPost, deletePost,
})(Post);
