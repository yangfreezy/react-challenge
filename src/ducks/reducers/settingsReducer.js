import { SET_LOADING, SET_USER_LOGGED_IN, SET_USER_LOGGED_OUT } from 'ducks/types';

const settingsState = {
  loading: false,
};
export const settingsReducer = (state = settingsState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_USER_LOGGED_IN:
      // Handle auth logic goes here
      return {
        ...state,
        user: { email: action.payload.email, authenticated: true },
      };
    case SET_USER_LOGGED_OUT:
      return {
        ...state,
        user: { authenticated: false },
      };
    default:
      return state;
  }
};
