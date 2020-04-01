import { SET_LOADING } from 'ducks/types';

const settingsState = {
  loading: false,
};
export const settingsReducer = (state = settingsState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
