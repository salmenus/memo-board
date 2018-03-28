import Firebase from '@firebase/app';
import '@firebase/firestore';
import { updateMemos } from './actions';

export default async ({firebase = Firebase, store = null}) => {

  // Simulates API call:
  // GET ideas/ -> [{“id”: “:id”, “created_date”: “:created_date”, “title”: “:title”, “body”: “:body”}, {}, …]
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

  store.dispatch(updateMemos(memos));

  return memos;
};
