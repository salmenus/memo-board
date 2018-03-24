import React, { Component } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from "./components/layout/Main";
import './App.css';

const App = () => {
  return (
    <div className={'app'}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
