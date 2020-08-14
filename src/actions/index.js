import axios from 'axios';

const ROOT_URL = 'https://apilab5.herokuapp.com/api';

export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  UPDATE_POST: 'UPDATE_POST',
  CREATE_POST: 'CREATE_POST',
  DELETE_POST: 'DELETE_POST',
  ERROR_SET: 'ERROR_SET',
  ERROR_CLEAR: 'ERROR_CLEAR',
};

export function fetchPosts() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts`)
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
    axios.get(`${ROOT_URL}/posts/${id}`)
      .then((response) => {
        console.log(response.data);
        dispatch({ type: ActionTypes.FETCH_POST, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.ERROR_SET, error });
      });
  };
}

export function errorclear() {
  return (dispatch) => {
    dispatch({ type: ActionTypes.ERROR_CLEAR });
  };
}

export function createPost(post, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts`, post).then((response) => {
      console.log(response.data);
      history.push('/');
    })
      .catch((error) => {
        dispatch({ type: ActionTypes.ERROR_SET, error });
      });
  };
}

export function updatePost(post) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts/${post.id}`, post).then((response) => {
      console.log(response.data);
      dispatch({ type: ActionTypes.FETCH_POST, payload: response.data });
    })
      .catch((error) => {
        dispatch({ type: ActionTypes.ERROR_SET, error });
      });
  };
}
export function deletePost(id, history) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}`).then((response) => {
      history.push('/');
    })
      .catch((error) => {
        dispatch({ type: ActionTypes.ERROR_SET, error });
      });
  };
}
