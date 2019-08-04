import React from 'react';
import * as TYPES from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

Wrapper.propTypes = {
  children: TYPES.node.isRequired
};

function Wrapper({ children }) {
  return (
    <Paper className='block-container block-container-grid'>
      <Grid container spacing={ 4 }>
        { children }
      </Grid>
    </Paper>
  );
}

export default Wrapper;