import React from 'react';
import * as TYPES from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';

import {
  Wrapper,
} from './components';

import {
  toggleKind
} from '~/src/actions';

import {
  kindSelector
} from './selectors';

Buttons.propTypes = {
  kinds: TYPES.array.isRequired,
  currentKind: TYPES.string.isRequired,
  toggleKind: TYPES.func.isRequired,
};

export function Buttons({
  kinds,
  currentKind,
  toggleKind,
}) {
  return (
    <Wrapper>
      {
        kinds.map((kind, i) => (
          <Button
            key={ i }
            variant='contained'
            color={ kind === currentKind ? 'primary' : 'default' }
            onClick={ () => toggleKind(kind) }
          >
            { kind }
          </Button>
        ))
      }
    </Wrapper>
  );
}

const mapStateToProps = state => ({
  kinds: kindSelector(state),
  currentKind: state.currentKind,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    toggleKind
  }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons);
