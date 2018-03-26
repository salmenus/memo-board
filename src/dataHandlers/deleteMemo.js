import Firebase from '@firebase/app';
import '@firebase/firestore';

export default async ({firebase = Firebase, store = null, id}) => {

  // Simulates API call:
  // POST idea/delete { “id”: “:id” }
  await firebase.firestore().collection('memos').doc(id).delete();

  store.dispatch({
    type: 'DELETE_MEMO',
    id: id
  });

  return id;
};
