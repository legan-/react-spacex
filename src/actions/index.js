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
        dispatch(actions.dataReceivedSuccess({ data, kind }));
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('fetchData:', error);
        dispatch(actions.dataReceivedFail());
      });
  });
};
