import React from 'react';
import * as TYPES from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  Wrapper,
} from './components';

Buttons.propTypes = {};

export function Buttons() {
  return (
    <Wrapper>
      Buttons
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
)(Buttons);

