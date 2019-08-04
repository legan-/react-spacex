import React from 'react';
import * as TYPES from 'prop-types';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

DataCard.propTypes = {
  name: TYPES.string.isRequired,
  image: TYPES.string.isRequired,
  onClick: TYPES.func.isRequired
};

function DataCard({ name, image, onClick }) {
  return (
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
          <Typography gutterBottom>
            { name }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default DataCard;