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
export const setUser = user => ({
  type: constants.SET_USER,
  payload: user,
});
