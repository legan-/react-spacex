import React from 'react';
import expect from 'expect';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Content from './index';

Enzyme.configure({ adapter: new Adapter() });

export default () => describe('Content', () => {
  const setup = newProps => {
    const props = Object.assign({}, newProps);
    const defaultProps = Content.defaultProps;
    const wrapper = mount(<Content { ...props } />);

    return {
      props,
      wrapper,
      defaultProps
    };
  };

  describe('layout', () => {
    const { wrapper } = setup();

    it('should display <Wrapper /> component', () => {
      expect(wrapper.exists('Wrapper')).toBeTruthy();
    });
  });
});
