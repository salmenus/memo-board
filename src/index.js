import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import initializeFirebaseApp from './utilities/initializeFirebaseApp';
import initializeI18n from './utilities/initializeI18n';
import reducers from './reducers/';
import './style/main.css';
import App from './App';
import Notifier from './components/Notifier';

initializeFirebaseApp();
initializeI18n();

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Notifier>
      <App />
    </Notifier>
  </Provider>,
  document.getElementById('root')
);
