export default (memos = {isFetching: true, items: []}, action) => {

  switch (action.type) {

    case 'ADD_MEMO': {
      const newMemo = {title: '', body: '', mostRecent: true, ...action.memo};
      return {
        isFetching: memos.isFetching,
        items: [newMemo, ...memos.items.map(memo => ({...memo, mostRecent: false}))]
      };
    }

    case 'UPDATE_MEMO': {
      const updatedMemo = action.memo;
      return {
        isFetching: memos.isFetching,
        items: memos.items.map(memo => {
          if(memo.id !== updatedMemo.id) {
            return memo;
          } else {
            return {...memo, ...updatedMemo};
          }
        })
      };
    }

    case 'UPDATE_MEMOS': {
      let result = Array.isArray(action.memos) ? [...action.memos] : [];
      return {
        isFetching: false,
        items: result.filter(memo => memo.id && memo.creationDate instanceof Date)
          .map(memo => ({...memo, mostRecent: false}))
      };
    }

    case 'DELETE_MEMO': {
      return {
        isFetching: memos.isFetching,
        items: memos.items.filter(memo => memo.id !== action.id)
      };
    }

    default: {
      return memos;
    }
  }
};
