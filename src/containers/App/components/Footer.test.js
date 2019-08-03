import React from 'react';
import expect from 'expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Footer from './Footer';

Enzyme.configure({ adapter: new Adapter() });

export default () => describe('Footer', () => {
  const setup = newProps => {
    const props = Object.assign({
      year: 2019,
      name: 'name'
    }, newProps);

    const className = 'footer';

    const wrapper = shallow(<Footer { ...props } />);

    return {
      props,
      wrapper,
      className
    };
  };

  it(`should have "${ setup().className }" class name`, () => {
    const { wrapper, className } = setup();
    expect(wrapper.hasClass(className)).toBeTruthy();
  });
});
