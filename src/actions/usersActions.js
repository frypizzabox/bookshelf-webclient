import axios from 'axios';
import { users } from '../constants/_ActionTypes';

const baseURL = 'https://floating-castle-22315.herokuapp.com';

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

export const loanBook = (userId, bookId) => (dispatch) => {
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
        dispatch({
          type: users.upsert.entries,
          payload: data,
        });
      })
      .catch(() => {});
  }
};

export const returnBook = (userId, bookId) => (dispatch) => {
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
        dispatch({
          type: users.upsert.entries,
          payload: data,
        });
      })
      .catch(() => {});
  }
};

export default {};
