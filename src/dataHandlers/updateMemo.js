import Firebase from '@firebase/app';
import '@firebase/firestore';
import { updateMemo } from './actions';

export default async ({firebase = Firebase, store = null, memo}) => {

  const newData = {};

  if(typeof memo.title === 'string') {
    newData.title = memo.title;
  }

  if(typeof memo.body === 'string') {
    newData.body = memo.body;
  }

  // Simulates API call:
  // POST idea/update { “id”: “:id”, “title”: “:title”, “body”: “:body” }
  await firebase.firestore().collection('memos').doc(memo.id).update(newData);

  const newMemo = {...memo};

  store.dispatch(updateMemo(newMemo));

  return newMemo;
};
