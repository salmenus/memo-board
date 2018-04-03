# React Memo Board

A responsive mini memo board developed using React JS, Redux, and Firebase.

Live demo URL:
<https://memo-board-b97e1.firebaseapp.com>

## Install and run locally

#### Firebase Config

Start by updating `.env` to enter your firebase config. You can also create a `.env.local` config file that will override the default configuration, and that will not be committed in Git.

Visit <https://firebase.google.com> to create a free account and a project. 

The following Firebase services need to be enabled:

* Database/Firestore
* Hosting


#### Local Server

```
npm install
npm start
```

Then open this URL in the browser to start the app:
<http://localhost:3000>

#### Running Unit Tests

```
npm run build-css
npm test
```

## About the project

#### Features implemented

* Loading and displaying memos in tiles.
* Adding new memos.
* Deleting memos.
* Updating memo titles and bodies.
* Sorting memos by creation date or by title.
* Notifications system to notify about updates and errors.
* Data persistence through Firebase - that simulates the backend RESET services described in the challenge document.
* Responsive design.

#### Technologies used

* **React JS** and **Redux** for UI and data handling.
* **SASS** for CSS pre-processing.
* **RxJS** for notifications.
* **Firestore SDK** for data persistence.
* **Jest** and **Enzyme** for unit tests.

#### Notes

* This project was developed on `Windows 10` using `Node JS v8.9.4`.
* Manual QA was done using `Chrome v65` and `Firefox v59` on `Windows`.
* An issue was noticed when testing on `Microsoft Edge v41.16` (data doesn't load). The problem is due to a bug in the Firebase SDK and it's currently being fixed. Further details in this link: <https://github.com/firebase/firebase-js-sdk/issues/461>.
