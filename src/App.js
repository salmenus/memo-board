import React, { Component } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';
import './App.css';
import PropTypes from 'prop-types';
import loadMemos from './data/loadMemos';

export default class extends Component {

  componentDidMount() {
    loadMemos({store: this.context.store});
  }

  render() {
    return (
      <div className={'app'}>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }

  static contextTypes = {
    store: PropTypes.object
  };
}
