import Firebase from '@firebase/app';
import '@firebase/firestore';

export default async ({firebase} = {firebase: Firebase}) => {

  const querySnapshot = await firebase.firestore().collection('memos').get();
  const memos = querySnapshot.docs.map(doc => {
    return {
      id: doc.id,
      title: doc.title,
      body: doc.body,
      creationDate: doc.creation_date
    }
  });

  return memos;

};
