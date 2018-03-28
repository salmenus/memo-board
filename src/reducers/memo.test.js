import memoReducer from './memos';

it('returns default state when it receives invalid action', () => {
  const defaultState = {STATE: 'DEFAULT'};
  const invalidAction = {type: 'INVALID', payload: null};
  const result = memoReducer(defaultState, invalidAction)
  expect(result).toBe(defaultState);
});

it('adds new memo to state and updates most recent attribute when it receives a valid ADD_MEMO action', () => {

  const initialState = {
    isFetching: false,
    items:[
      {id: 'default id', title: 'default title', body: 'default body', creationDate: null, mostRecent: true}
      ]
  };

  const newMemo = {id: 100, title: 'My memos!', body: 'Let us do 100% test coverage!', creationDate: new Date()};

  const newState = {
    isFetching: false,
    items: [
      {id: 100, title: 'My memos!', body: 'Let us do 100% test coverage!', creationDate: new Date(), mostRecent: true},
      {id: 'default id', title: 'default title', body: 'default body', creationDate: null, mostRecent: false}
    ]
  };

  const result = memoReducer(initialState, {type: 'ADD_MEMO', memo: newMemo});
  expect(result).toEqual(newState);
});

it('updates memos state when it receives a valid UPDATE_MEMO action', () => {

  const defaultState = {
    isFetching: true,
    items: [
      {id: 100, title: 'default title', body: 'default body', creationDate: null},
      {id: 200, title: 'default title', body: 'default body', creationDate: null}
  ]};

  const updatedMemo = {id: 100, title: 'My memos!', body: 'Let us do 100% test coverage!', creationDate: new Date()};

  const newState = {
    isFetching: true,
    items: [
      {...updatedMemo},
      {id: 200, title: 'default title', body: 'default body', creationDate: null}
    ]
  };

  const result = memoReducer(defaultState, {type: 'UPDATE_MEMO', memo: updatedMemo});
  expect(result).toEqual(newState);
});

it('updates memos state when it receives a valid UPDATE_MEMOS action', () => {

  const defaultState = {
    isFetching: true,
    items: [{id: 100, title: 'default title', body: 'default body', creationDate: null}]
  };

  const newMemos = [{id: 100, title: 'My memos!', body: 'Let us do 100% test coverage!', creationDate: new Date()}];
  const updatedMemos = {
    isFetching: false,
    items: [{id: 100, title: 'My memos!', mostRecent: false, body: 'Let us do 100% test coverage!', creationDate: new Date()}]
  };

  const result = memoReducer(defaultState, {type: 'UPDATE_MEMOS', memos: newMemos});
  expect(result).toEqual(updatedMemos);
});
