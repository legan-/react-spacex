import * as actions from './actionCreators';
import * as api from '../api';
import { parseReceivedData } from '../helpers';

export const fetchData = () => dispatch => {
  const kinds = ['rockets', 'dragons'];
  
  dispatch(actions.requestData());

  kinds.forEach(kind => {
    const url = `https://api.spacexdata.com/v3/${ kind }`;

    api.getData(url)
      .then(parseReceivedData)
      .then(data => {
        dispatch(actions.dataReceivedSuccess({ [kind]: data }));
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('fetchData:', error);
        dispatch(actions.dataReceivedFail());
      });
  });
};

export const toggleKind = kind => (dispatch, getState) => {
  const {
    currentKind
  } = getState();

  if (currentKind === kind) {
    dispatch(actions.toggleKind());
  } else {
    dispatch(actions.toggleKind(kind));
  }
};
