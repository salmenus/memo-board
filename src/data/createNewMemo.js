import Firebase from '@firebase/app';
import '@firebase/firestore';

export default async ({firebase = Firebase, store = null}) => {

  const memoReference = await firebase.firestore().collection('memos').add({
    creation_data: new Date()
  });

  const newMemo = {
    id: memoReference.id,
    creationDate: memoReference.data().creation_data
  };

  console.dir(newMemo);

  if(store && typeof store.dispatch === 'function') {
    store.dispatch({
      type: 'ADD_MEMO',
      newMemo
    });
  }

  return newMemo;
};
