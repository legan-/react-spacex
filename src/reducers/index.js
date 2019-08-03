import { combineReducers } from 'redux';

import initialState from './initialState';
import TYPES from '../constants/ActionTypes';

import data from './data';

const currentKind = (state = initialState.currentKind, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const currentId = (state = initialState.currentId, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  data,
  currentKind,
  currentId
});
