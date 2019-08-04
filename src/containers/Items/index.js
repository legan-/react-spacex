import React from 'react';
import * as TYPES from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  DataCard,
  Warning,
  Wrapper,
} from './components';

import {
  toggleId
} from '~/src/actions';

import {
  currentKindDataSelector
} from './selectors';

Items.propTypes = {
  isCurrentKindPresented: TYPES.bool.isRequired,
  currentKindData: TYPES.array.isRequired,
  toggleId: TYPES.func.isRequired,
};

export function Items({
  isCurrentKindPresented,
  currentKindData,
  toggleId,
}) {  

  return (
    <Wrapper>
      { !isCurrentKindPresented && <Warning message='Please select one of the kinds above' /> }
      { isCurrentKindPresented && !currentKindData.length && <Warning message='List is empty' /> }
      {
        currentKindData.map(({ id, name, image }) => (
          <DataCard
            key={ id }
            name={ name }
            image={ image }
            onClick={ () => toggleId(id.toString()) }
          />
        ))
      }
    </Wrapper>
  );
}

const mapStateToProps = state => ({
  isCurrentKindPresented: state.currentKind.length > 0,
  currentKindData: currentKindDataSelector(state),
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    toggleId
  }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Items);
