import Firebase from '@firebase/app';
import '@firebase/firestore';
import { deleteMemo } from './actions';

export default async ({firebase = Firebase, store = null, id}) => {

  // Simulates API call:
  // POST idea/delete { “id”: “:id” }
  await firebase.firestore().collection('memos').doc(id).delete();

  store.dispatch(deleteMemo(id));

  return id;
};
