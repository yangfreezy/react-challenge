import { createStore } from 'redux';
import rootReducer from 'ducks/reducers/index';

export const store = createStore(rootReducer, {});
