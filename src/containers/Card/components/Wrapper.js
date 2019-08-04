import React from 'react';
import * as TYPES from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

Wrapper.propTypes = {
  name: TYPES.string.isRequired,
  type: TYPES.string.isRequired,
  image: TYPES.string.isRequired,
  description: TYPES.string.isRequired,
  closeButtonHandler: TYPES.func.isRequired,
};

function Wrapper({
  name,
  type,
  image,
  description,
  closeButtonHandler
}) {
  return (
    <Paper className='block-container block-container-card'>
      <Card className='card-wrapper'>
        <CardHeader
          title={ name }
          subheader={ type }
          action={ (
            <IconButton
              aria-label='close'
              onClick={ closeButtonHandler }
            >
              <CloseIcon />
            </IconButton>
          ) }
        />
        <CardMedia
          component='img'
          alt={ name }
          image={ image }
          title={ name }
        />
        <CardContent>
          <Typography
            variant='body2'
            color='textSecondary'
            component='p'
          >
            { description }
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
}

export default Wrapper;