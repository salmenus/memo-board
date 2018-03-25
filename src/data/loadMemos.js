import Firebase from '@firebase/app';
import '@firebase/firestore';

export default async ({firebase = Firebase, store = null}) => {

  const querySnapshot = await firebase.firestore().collection('memos').get();
  const memos = querySnapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      title: data.title || '',
      body: data.body || '',
      creationDate: data.creation_date
    };
  });

  store.dispatch({
    type: 'UPDATE_MEMOS',
    memos
  });

  return memos;
};
