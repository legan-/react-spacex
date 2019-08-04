import React from 'react';
import * as TYPES from 'prop-types';

import Paper from '@material-ui/core/Paper';

Wrapper.propTypes = {
  children: TYPES.node.isRequired
};

function Wrapper({ children }) {
  return (
    <Paper className='block-container block-container-grid'>
      { children }
    </Paper>
  );
}

export default Wrapper;