const memos = (state = null, action) => {
  switch (action.type) {
    case 'ADD_MEMO': {
      const newMemo = {title: '', body: '', ...action.memo};
      return [newMemo, ...state];
    }
    case 'UPDATE_MEMO': {
      const updatedMemo = action.memo;
      return state.map(memo => {
        if(memo.id !== updatedMemo.id) {
          return memo;
        } else {
          return {...updatedMemo};
        }
      });
    }
    case 'UPDATE_MEMOS': {
      const result = Array.isArray(action.memos) ? [...action.memos] : [];
      return result.sort((memo1, memo2) => memo2.creationDate.getTime() - memo1.creationDate.getTime());
    }
    case 'DELETE_MEMO': {
      return state.filter(memo => memo.id !== action.id);
    }
    default: {
      return state;
    }
  }
};

export default memos;
