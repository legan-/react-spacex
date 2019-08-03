import React from 'react';
import * as TYPES from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  Wrapper,
} from './components';

Grid.propTypes = {};

export function Grid() {
  return (
    <Wrapper>
      Grid
    </Wrapper>
  );
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({

  }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid);
