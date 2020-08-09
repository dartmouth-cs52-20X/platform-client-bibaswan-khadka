import axios from 'axios';

const ROOT_URL = 'https://platform.cs52.me/api';
const API_KEY = '?key=Test_Key';

export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  UPDATE_POST: 'UPDATE_POST',
  CREATE_POST: 'CREATE_POST',
  DELETE_POST: 'DELETE_POST',
};

export function fetchPosts() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts${API_KEY}`)
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_POSTS, payload: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.ERROR_SET, error });
      });
  };
}

export function fetchPost(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
      .then((response) => {
        console.log(response.data);
        dispatch({ type: ActionTypes.FETCH_POST, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.ERROR_SET, error });
      });
  };
}

export function createPost(post, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts${API_KEY}`, post).then((response) => {
      console.log(response.data);
      history.push('/');
    })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function updatePost(post) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts/${post.id}${API_KEY}`, post).then((response) => {
      console.log(response.data);
      dispatch({ type: ActionTypes.FETCH_POST, payload: response.data });
    })
      .catch((error) => {
        console.log(error);
      });
  };
}
export function deletePost(id, history) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then((response) => {
      history.push('/');
    })
      .catch((error) => {
        dispatch({ type: ActionTypes.ERROR_SET, error });
      });
  };
}
