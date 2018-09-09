import { users } from '../constants/_ActionTypes';

const defaultState = {
  entries: {},
  formattedEntries: {},
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case users.upsert.entries: {
      return {
        ...state,
        entries: action.payload.reduce((entries, user) => (
          Object.assign(entries, { [user._id]: user })
        ), state.entries),
        formattedEntries: action.payload.reduce((entries, user) => (
          Object.assign(entries, {
            [user._id]: {
              id: user._id,
              displayName: user.displayName,
              email: user.email,
              phoneNumber: user.phoneNumber,
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
