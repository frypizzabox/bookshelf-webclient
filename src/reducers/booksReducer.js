import { books } from '../constants/_ActionTypes';

const defaultState = {
  entries: {},
  formattedEntries: {},
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case books.upsert.entries: {
      return {
        ...state,
        entries: action.payload.reduce((entries, book) => (
          Object.assign(entries, { [book._id]: book })
        ), state.entries),
        formattedEntries: action.payload.reduce((entries, book) => (
          Object.assign(entries, {
            [book._id]: {
              id: book._id,
              title: book.title,
              author: book.author,
              isbn: book.isbn,
            },
          })
        ), state.formattedEntries),
      };
    }
    default:
      break;
  }

  return state;
};
