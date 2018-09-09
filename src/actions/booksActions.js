import axios from 'axios';
import { books } from '../constants/_ActionTypes';

const baseURL = 'https://bookshelf--api.herokuapp.com';

export const fetchBooks = () => (dispatch) => {
  axios({
    method: 'get',
    baseURL,
    url: '/books',
  })
    .then(({ data }) => {
      dispatch({
        type: books.upsert.entries,
        payload: data,
      });
    })
    .catch(() => {});
};

export default {};
