import Firebase from '@firebase/app';

export default ({firebase} = {firebase: Firebase}) => {
  return firebase.initializeApp({
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL
  });
};
