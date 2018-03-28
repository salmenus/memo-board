import { createAction } from 'redux-actions';

export const addMemo = createAction('ADD_MEMO');

export const deleteMemo = createAction('DELETE_MEMO');

export const updateMemo = createAction('UPDATE_MEMO');

export const updateMemos = createAction('UPDATE_MEMOS');
