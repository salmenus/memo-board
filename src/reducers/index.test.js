import { combineReducers } from 'redux';
import './index';

jest.mock('redux', () => {
  return { combineReducers: jest.fn() };
});

it('reducersIndex is called with all available reducers', () => {
  const expectedReducers = ['user', 'signIn'];
  const reducersList =
    combineReducers.mock.calls[combineReducers.mock.calls.length - 1][0];
  expect(Object.keys(reducersList)).toEqual(expectedReducers);
});
