import * as constants from 'ducks/types';

// ------ MODALS ACTIONS ------ //
export const setModal = modal => ({
  type: constants.SET_MODAL,
  payload: modal,
});

// ------ SETTINGS ACTIONS ------ //
export const setLoading = loading => ({
  type: constants.SET_LOADING,
  payload: loading,
});

// ------ USER ACTIONS ------ //
export const setUserLoggedIn = user => ({
  type: constants.SET_USER_LOGGED_IN,
  payload: user,
});

export const setUserLoggedOut = user => ({
  type: constants.SET_USER_LOGGED_OUT,
  payload: user,
});
