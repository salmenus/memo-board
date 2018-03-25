import Firebase from '@firebase/app';
import '@firebase/firestore';

export default async ({firebase = Firebase, store = null}) => {

  const creationDate = new Date();
  const memoReference = await firebase.firestore().collection('memos').add({
    creation_data: creationDate
  });

  const newMemo = {
    id: memoReference.id,
    creationDate
  };

  if(store && typeof store.dispatch === 'function') {
    store.dispatch({
      type: 'ADD_MEMO',
      memo: newMemo
    });
  }

  return newMemo;
};
