import React from 'react';

import {
  Wrapper,
} from './components';

import {
  Buttons,
  Card,
  Items,
} from '../index';

function Content() {
  return (
    <Wrapper>
      <Buttons />
      <Items />
      <Card />
    </Wrapper>
  );
}

export default Content;
