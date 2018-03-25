import Firebase from '@firebase/app';
import '@firebase/firestore';

export default async ({firebase = Firebase, store = null, memo}) => {

  const newData = {
    title: memo.title,
    body: memo.body,
    creation_date: memo.creationDate
  };

  await firebase.firestore().collection('memos').doc(memo.id).update(newData);

  const newMemo = {...memo};

  if(store && typeof store.dispatch === 'function') {
    store.dispatch({
      type: 'UPDATE_MEMO',
      memo: newMemo
    });
  }

  return newMemo;
};
