import axios from 'axios';
import { users, books } from '../constants/_ActionTypes';

const baseURL = 'https://bookshelf--api.herokuapp.com';

export const fetchUsers = () => (dispatch) => {
  axios({
    method: 'get',
    baseURL,
    url: '/users',
  })
    .then(({ data }) => {
      dispatch({
        type: users.upsert.entries,
        payload: data,
      });
    })
    .catch(() => {});
};

export const loanBook = (userId, bookId) => (dispatch, getState) => {
  if (userId !== undefined && bookId !== undefined) {
    axios({
      method: 'post',
      baseURL,
      url: `/users/${userId}/loan`,
      data: {
        bookId,
      },
    })
      .then(({ data }) => {
        const book = getState().books.entries[bookId];
        book.loanedToUser.push(userId);
        dispatch({
          type: books.upsert.entries,
          payload: [book],
        });
        dispatch({
          type: users.upsert.entries,
          payload: data,
        });
      })
      .catch(() => {});
  }
};

export const returnBook = (userId, bookId) => (dispatch, getState) => {
  if (userId !== undefined && bookId !== undefined) {
    axios({
      method: 'post',
      baseURL,
      url: `/users/${userId}/return`,
      data: {
        bookId,
      },
    })
      .then(({ data }) => {
        const book = getState().books.entries[bookId];
        book.loanedToUser = [];
        dispatch({
          type: books.upsert.entries,
          payload: [book],
        });
        dispatch({
          type: users.upsert.entries,
          payload: data,
        });
      })
      .catch(() => {});
  }
};

export default {};
