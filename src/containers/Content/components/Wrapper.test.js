import React from 'react';
import expect from 'expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Wrapper from './Wrapper';

Enzyme.configure({ adapter: new Adapter() });

export default () => describe('Wrapper', () => {
  const setup = newProps => {
    const props = Object.assign({
      children: []
    }, newProps);

    const className = 'content wrapper';

    const wrapper = shallow(<Wrapper { ...props } />);

    return {
      props,
      wrapper,
      className
    };
  };

  it(`should have "${ setup().className }" class name`, () => {
    const { wrapper, className } = setup();
    const classNames = className.split(' ');

    for (const cn of classNames) {
      expect(wrapper.hasClass(cn)).toBeTruthy();
    }
  });
});
