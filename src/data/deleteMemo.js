import Firebase from '@firebase/app';
import '@firebase/firestore';

export default async ({firebase = Firebase, store = null, id}) => {

  await firebase.firestore().collection('memos').doc(id).delete();

  if(store && typeof store.dispatch === 'function') {
    store.dispatch({
      type: 'DELETE_MEMO',
      id: id
    });
  }

  return id;
};
