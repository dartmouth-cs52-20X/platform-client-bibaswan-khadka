import { ActionTypes } from '../actions';

const initialState = {
  error: false,
};

const ErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ERROR_SET:
      console.log('2nd');
      return { error: true };
    case ActionTypes.ERROR_CLEAR:
      return { error: false };
    default:
      return state;
  }
};

export default ErrorReducer;
