export default (memos = null, action) => {

  switch (action.type) {

    case 'ADD_MEMO': {
      const newMemo = {title: '', body: '', mostRecent: true, ...action.memo};
      return [newMemo, ...memos.map(memo => ({...memo, mostRecent: false}))];
    }

    case 'UPDATE_MEMO': {
      const updatedMemo = action.memo;
      return memos.map(memo => {
        if(memo.id !== updatedMemo.id) {
          return memo;
        } else {
          return {...memo, ...updatedMemo};
        }
      });
    }

    case 'UPDATE_MEMOS': {
      let result = Array.isArray(action.memos) ? [...action.memos] : [];
      return result.filter(memo => memo.id && memo.creationDate instanceof Date);
    }

    case 'DELETE_MEMO': {
      return memos.filter(memo => memo.id !== action.id);
    }

    default: {
      return memos;
    }
  }
};
