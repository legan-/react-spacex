import React from 'react';
import * as TYPES from 'prop-types';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

DataCard.propTypes = {
  name: TYPES.string.isRequired,
  image: TYPES.string.isRequired,
  onClick: TYPES.func.isRequired
};

function DataCard({ name, image, onClick }) {
  return (
    <Grid
      item
      xs={ 6 }
    >
      <Card>
        <CardActionArea onClick={ onClick }>
          <CardMedia
            component='img'
            alt={ name }
            title={ name }
            height='150'
            image={ image }
          />
          <CardContent>
            <Typography
              component='h6'
              variant='h6'
            >
              { name }
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default DataCard;
