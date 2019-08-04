import React from 'react';
import * as TYPES from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';

import {
  DataCard,
  Warning,
  Wrapper,
} from './components';

import {
  currentKindDataSelector
} from './selectors';

Items.propTypes = {
  isCurrentKindPresented: TYPES.bool.isRequired,
  currentKindData: TYPES.array.isRequired,
};

export function Items({
  isCurrentKindPresented,
  currentKindData,
}) {  

  return (
    <Wrapper>
      { !isCurrentKindPresented && <Warning message='Please select one of the kinds above' /> }
      { isCurrentKindPresented && !currentKindData.length && <Warning message='List is empty' /> }
      <Grid container spacing={ 4 }>
        {
          currentKindData.map(({ id, name, image }) => (
            <Grid
              key={ id }
              item
              xs={ 6 }
            >
              <DataCard
                name={ name }
                image={ image }
                onClick={ () => console.log('name', id) }
              />
            </Grid>
          ))
        }
      </Grid>
    </Wrapper>
  );
}

const mapStateToProps = state => ({
  isCurrentKindPresented: state.currentKind.length > 0,
  currentKindData: currentKindDataSelector(state),
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({

  }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Items);
