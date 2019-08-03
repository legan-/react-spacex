import TYPES from '../constants/ActionTypes';

export const requestData = () => ({
  type: TYPES.REQUEST_DATA
});

export const dataReceivedSuccess = ({ data, kind }) => ({
  type: TYPES.DATA_RECEIVED_SUCCESS,
  payload: {
    kind,
    data
  }
});

export const dataReceivedFail = () => ({
  type: TYPES.DATA_RECEIVED_FAIL
});
