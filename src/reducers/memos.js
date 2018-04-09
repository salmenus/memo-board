import { handleActions } from 'redux-actions';
import { addMemo, updateMemo, updateMemos, deleteMemo } from "../dataHandlers/actions";

export const addMemoHandler = (state, action) => {
  const newMemo = {title: '', body: '', mostRecent: true, ...action.payload};
  return {
    isFetching: state.isFetching,
    items: [newMemo, ...state.items.map(memo => ({...memo, mostRecent: false}))]
  };
};

export const updateMemoHandler = (state, action) => {
  const updatedMemo = action.payload;
  return {
    isFetching: state.isFetching,
    items: state.items.map(memo => {
      if(memo.id !== updatedMemo.id) {
        return memo;
      } else {
        return {...memo, ...updatedMemo};
      }
    })
  };
};

export const updateMemosHandler = (state, action) => {
  let result = Array.isArray(action.payload) ? [...action.payload] : [];
  return {
    isFetching: false,
    items: result.filter(memo => memo.id && memo.creationDate instanceof Date)
      .map(memo => ({...memo, mostRecent: false}))
  };
};

export const deleteMemoHandler = (state, action) => {
  return {
    isFetching: state.isFetching,
    items: state.items.filter(memo => memo.id !== action.payload)
  };
};

const reducers = handleActions({

  [addMemo]: addMemoHandler,

  [updateMemo]: updateMemoHandler,

  [updateMemos]: updateMemosHandler,

  [deleteMemo]: deleteMemoHandler

}, {isFetching: true, items: []});

export default reducers;
