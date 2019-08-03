import React from 'react';
import expect from 'expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Main from './Main';

Enzyme.configure({ adapter: new Adapter() });

export default () => describe('Main', () => {
  const setup = newProps => {
    const props = Object.assign({
      children: []
    }, newProps);

    const className = 'main';

    const wrapper = shallow(<Main { ...props } />);

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
