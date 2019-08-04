import React from 'react';
import * as TYPES from 'prop-types';

import Typography from '@material-ui/core/Typography';

Warning.propTypes = {
  message: TYPES.string.isRequired
};

function Warning({ message }) {
  return (
    <Typography>
      { message }
    </Typography>
  );
}

export default Warning;