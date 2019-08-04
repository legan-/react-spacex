import { combineReducers } from 'redux';

import initialState from './initialState';
import TYPES from '../constants/ActionTypes';

import data from './data';

const currentKind = (state = initialState.currentKind, action) => {
  switch (action.type) {
    case TYPES.TOGGLE_KIND:
      return action.payload.kind;
    default:
      return state;
  }
};

const currentId = (state = initialState.currentId, action) => {
  switch (action.type) {
    case TYPES.TOGGLE_ID:
      return action.payload.id;
    case TYPES.TOGGLE_KIND:
      return '';
    default:
      return state;
  }
};

export default combineReducers({
  data,
  currentKind,
  currentId
});
