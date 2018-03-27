import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';
import { createStore } from 'redux';
import initializeFirebaseApp from './utilities/initializeFirebaseApp';
import initializeI18n from './utilities/initializeI18n';
import reducers from './reducers/';
import './style/main.css';
import App from './App';
import NotificationProvider from './providers/NotificationProvider';

initializeFirebaseApp();
initializeI18n();

const store = createStore(reducers);

ReactDOM.render(
  <StoreProvider store={store}>
    <NotificationProvider>
      <App />
    </NotificationProvider>
  </StoreProvider>,
  document.getElementById('root')
);
