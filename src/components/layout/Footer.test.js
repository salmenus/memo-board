import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';

it('displays span containing footer message', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.find('span').length).toBe(1);
});
