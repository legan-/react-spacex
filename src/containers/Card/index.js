import React from 'react';
import * as TYPES from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  Wrapper,
} from './components';

import {
  toggleId
} from '~/src/actions';

import {
  currentIdDataSelector
} from './selectors';

Card.propTypes = {
  isCurrentIdPresented: TYPES.bool.isRequired,
  currentIdData: TYPES.shape({
    name: TYPES.string,
    type: TYPES.string,
    active: TYPES.bool,
    image: TYPES.string
  }).isRequired,
  toggleId: TYPES.func.isRequired
};

export function Card({
  isCurrentIdPresented,
  currentIdData,
  toggleId,
}) {
  return isCurrentIdPresented && (
    <Wrapper
      { ...currentIdData }
      closeButtonHandler={ () => toggleId() }
    />
  );
}

const mapStateToProps = state => ({
  isCurrentIdPresented: state.currentId.length > 0,
  currentIdData: currentIdDataSelector(state)
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    toggleId
  }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
