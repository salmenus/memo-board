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

const createStoreParams = [reducers];
if(process.env.NODE_ENV === 'development' && process.env.REACT_APP_DEBUG_REDUX === 'true') {
  createStoreParams.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

const store = createStore(...createStoreParams);

ReactDOM.render(
  <StoreProvider store={store}>
    <NotificationProvider>
      <App />
    </NotificationProvider>
  </StoreProvider>,
  document.getElementById('root')
);
