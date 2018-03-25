const memos = (state = null, action) => {
  switch (action.type) {
    case 'ADD_MEMO': {
      const newMemo = {...action.memo};
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
      return Array.isArray(action.memos) ? [...action.memos] : [];
    }
    default: {
      return state;
    }
  }
};

export default memos;
