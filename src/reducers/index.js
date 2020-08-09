// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from 'redux';

import PostsReducer from './postsreducer';
import errorreducer from './errorreducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  errorcheck: errorreducer,
});

export default rootReducer;
