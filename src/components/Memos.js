import React, { Component } from 'react';
import Memo from './Memo';
import './Memos.css'

class Memos extends Component {
  render() {
    const memos = [<Memo key={1}/>, <Memo key={2}/>, <Memo key={3}/>, <Memo key={4}/>, <Memo key={5}/>, <Memo key={6}/>, <Memo key={7}/>];
    return (<div className={'memos'}>{memos}</div>);
  }
}

export default Memos;
