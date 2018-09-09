import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import booksReducer from './booksReducer';

export default combineReducers({
  users: usersReducer,
  books: booksReducer,
});
