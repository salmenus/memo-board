import React, { Component } from 'react';
import Memos from './../Memos';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <main className={'main'}>
        <Memos />
      </main>);
  }
}

export default Main;
