import React from 'react';
import App from './App';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toBeTruthy();
});

it('renders page header', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<Header />)).toBe(true);
});

it('renders page footer', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<Footer />)).toBe(true);
});

it('renders page main section', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<Main />)).toBe(true);
});
