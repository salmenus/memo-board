# The Memo Board

A mini project developed for BCG-DV as part of a Front End Developer interview challenge.

Live demo URL:
<https://bcgdv-memo-board.firebaseapp.com>

## Install and run locally

```
npm install
npm start
```

Then open this URL in the browser to start the app:
<http://localhost:3000>

#### Run Unit Tests

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

#### Development notes

* This project was developed on `Windows` using `Node JS v8.9.4`.
* Manual QA was done using `Chrome v65` and `Firefox v59` on `Windows`.
* An issue was noticed when testing on `Microsoft Edge v41.16` (data doesn't load). The problem is due to a bug in the Firebase SDK and it's currently being fixed. Further details in this link: <https://github.com/firebase/firebase-js-sdk/issues/461>.

## About The Author

This project was developed by Salmen Hichri.

* Email: `salmen.hichri@gmail.com`.
* GitHub profile: <https://github.com/salmenus>.
* LinkedIn profile: <https://www.linkedin.com/in/hichri>.
