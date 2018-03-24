import React, { Component } from 'react';
import Memos from '../MemosList';
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
