import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

it('displays h1 containing app name', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('h1').length).toBe(1);
});
