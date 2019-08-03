import { combineReducers } from 'redux';

import initialState from './initialState';
import TYPES from '../constants/ActionTypes';

const rockets = (state = initialState.data.rockets, action) => {
  switch (action.type) {
    case TYPES.DATA_RECEIVED_SUCCESS: {
      return action.payload.kind === 'rockets' ? { ...action.payload.data } : state;
    }
    default:
      return state;
  }
};

const dragons = (state = initialState.data.dragons, action) => {
  switch (action.type) {
    case TYPES.DATA_RECEIVED_SUCCESS:
      return action.payload.kind === 'dragons' ? { ...action.payload.data } : state;
    default:
      return state;
  }
};

const isLoading = (state = initialState.data.isLoading, action) => {
  switch (action.type) {
    case TYPES.REQUEST_DATA:
      return true;
    case TYPES.DATA_RECEIVED_SUCCESS:
      return false;
    default:
      return state;
  }
};

const isReceived = (state = initialState.data.isReceived, action) => {
  switch (action.type) {
    case TYPES.DATA_RECEIVED_SUCCESS:
    case TYPES.DATA_RECEIVED_FAIL:
      return true;
    default:
      return state;
  }
};

export default combineReducers({
  rockets,
  dragons,
  isLoading,
  isReceived,
});
