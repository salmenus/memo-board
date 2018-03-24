import React from 'react';
import Main from './Main';
import Memos from '../Memos';
import { shallow } from 'enzyme';

it('inserts main wrapper with appropriate css tag', () => {
  const wrapper = shallow(<Main />);
  expect(wrapper.find('main[className=\'main\']').length).toBe(1);
});

it('renders memos component', () => {
  const wrapper = shallow(<Main />);
  expect(wrapper.contains(<Memos />)).toBe(true);
});
