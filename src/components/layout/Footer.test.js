import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';

jest.mock('i18next', () => ({
  t: () => jest.fn().mockReturnValue('t')
}));

it('displays span containing footer message', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.find('span').length).toBe(1);
});
