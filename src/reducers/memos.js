const memos = (state = null, action) => {
  switch (action.type) {
    case 'UPDATE_MEMO':
      const memo = action.memo;
      return { id: memo.id, title: memo.title, body: memo.body,  creationDate: memo.creationDate};
    default:
      return state;
  }
};

export default memos;
