import Firebase from '@firebase/app';
import '@firebase/firestore';

export default async ({firebase = Firebase, store = null}) => {

  // Simulates API call:
  // GET ideas/new -> { “id”: “:id”, “created_date”: “:created_date” }
  const memoReference = await firebase.firestore().collection('memos')
    .add({creation_date: firebase.firestore.FieldValue.serverTimestamp()});
  const memo = await firebase.firestore().collection('memos').doc(memoReference.id).get();

  const newMemo = {
    id: memoReference.id,
    creationDate: memo.data().creation_date,
    blank: true
  };

  store.dispatch({
    type: 'ADD_MEMO',
    memo: {...newMemo}
  });

  return newMemo;
};
