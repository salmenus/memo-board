import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.css';
import App from './App';
import initializeI18n from './utilities/initializeI18n';

initializeI18n();

ReactDOM.render(<App />, document.getElementById('root'));
