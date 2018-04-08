import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';
import Notifications from './components/layout/Notifications';
import CSSModules from 'react-css-modules';
import styles from './App.css';

const App = () => (
  <div styleName={'app'}>
    <Notifications />
    <Header />
    <Main />
    <Footer />
  </div>
);

export default CSSModules(App, styles);
