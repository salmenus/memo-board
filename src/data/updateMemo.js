import Firebase from '@firebase/app';
import '@firebase/firestore';

export default async ({firebase = Firebase, store = null, memo}) => {

  const newData = {
    title: memo.title,
    body: memo.body,
    creation_date: memo.creationDate
  };

  // Simulates API call:
  // POST idea/update { “id”: “:id”, “title”: “:title”, “body”: “:body” }
  await firebase.firestore().collection('memos').doc(memo.id).update(newData);

  const newMemo = {...memo};

  store.dispatch({
    type: 'UPDATE_MEMO',
    memo: newMemo
  });

  return newMemo;
};
