
export const addMemo = (newMemo) => ({
  type: 'ADD_MEMO',
  memo: {...newMemo}
});

export const deleteMemo = (id) => ({
  type: 'DELETE_MEMO',
  id: id
});

export const updateMemo = (newMemo) => ({
  type: 'UPDATE_MEMO',
  memo: newMemo
});

export const updateMemos = (memos) => ({
  type: 'UPDATE_MEMOS',
  memos
});
