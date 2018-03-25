import memoReducer from './memo';

it('returns default state when it receives invalid action', () => {
  const defaultState = {STATE: 'DEFAULT'};
  const invalidAction = {type: 'INVALID', payload: null};
  const result = memoReducer(defaultState, invalidAction)
  expect(result).toBe(defaultState);
});

it('updates memo state when it receives a valid UPDATE_MEMO action', () => {
  const defaultState = {id: 'default id', title: 'default title', body: 'default body', creationDate: null};
  const updatedMemo = {id: 100, title: 'My memo!', body: 'Let us do 100% test coverage!', creationDate: new Date()}
  const result = memoReducer(defaultState, {type: 'UPDATE_MEMO', memo: updatedMemo});
  expect(result).toEqual(updatedMemo);
});

