import memoReducer from './memos';

it('returns default state when it receives invalid action', () => {
  const defaultState = {STATE: 'DEFAULT'};
  const invalidAction = {type: 'INVALID', payload: null};
  const result = memoReducer(defaultState, invalidAction)
  expect(result).toBe(defaultState);
});

it('adds new memo to state and updates most recent attribute when it receives a valid ADD_MEMO action', () => {
  const initialMemo = [{id: 'default id', title: 'default title', body: 'default body', creationDate: null, mostRecent: true}];
  const newMemo = {id: 100, title: 'My memos!', body: 'Let us do 100% test coverage!', creationDate: new Date(), mostRecent: true};
  const result = memoReducer([initialMemo], {type: 'ADD_MEMO', memo: newMemo});
  expect(result).toEqual([newMemo, {...initialMemo, mostRecent: false}]);
});

it('updates memos state when it receives a valid UPDATE_MEMO action', () => {

  const defaultState = [
    {id: 100, title: 'default title', body: 'default body', creationDate: null},
    {id: 200, title: 'default title', body: 'default body', creationDate: null}
  ];

  const updatedMemo = {id: 100, title: 'My memos!', body: 'Let us do 100% test coverage!', creationDate: new Date()};

  const newState = [
    {...updatedMemo},
    {id: 200, title: 'default title', body: 'default body', creationDate: null}
  ];

  const result = memoReducer(defaultState, {type: 'UPDATE_MEMO', memo: updatedMemo});
  expect(result).toEqual(newState);
});

it('updates memos state when it receives a valid UPDATE_MEMOS action', () => {
  const defaultState = [{id: 100, title: 'default title', body: 'default body', creationDate: null}];
  const updatedMemos = [{id: 100, title: 'My memos!', body: 'Let us do 100% test coverage!', creationDate: new Date()}];
  const result = memoReducer(defaultState, {type: 'UPDATE_MEMOS', memos: updatedMemos});
  expect(result).toEqual([...updatedMemos]);
});
