import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';
import Notifications from './components/layout/Notifications';
import './App.css';

export default () => (
  <div className={'app'}>
    <Notifications />
    <Header />
    <Main />
    <Footer />
  </div>
);
