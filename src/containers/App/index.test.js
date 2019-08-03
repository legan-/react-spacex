import React from 'react';
import expect from 'expect';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './index';

Enzyme.configure({ adapter: new Adapter() });

export default () => describe('App', () => {
  const setup = newProps => {

    const props = Object.assign({}, newProps);
    const defaultProps = App.defaultProps;
    const wrapper = mount(<App { ...props } />);

    return {
      props,
      wrapper,
      defaultProps
    };
  };

  describe('layout', () => {
    const { wrapper } = setup();

    it('should display <Content /> component', () => {
      expect(wrapper.exists('Content')).toBeTruthy();
    });

    it('should display <Footer /> component', () => {
      expect(wrapper.exists('Footer')).toBeTruthy();
    });
  });
});
