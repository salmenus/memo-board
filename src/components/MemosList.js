import React, { Component } from 'react';
import Memo from './memo/Memo';
import './MemosList.css';
import Loading from './Loading';
import loadMemos from './../data/loadMemos';

class Memos extends Component {

  constructor() {
    super();

    this.state = {
      memos: null
    };
  }

  componentWillMount() {
    loadMemos()
      .then(memos => {
        this.setState({memos});
      });
  }

  render() {

    if(this.state.memos === null) {
      return <Loading />;
    }

    const memos = this.state.memos.map((memo) => {
      return <Memo key={memo.id} memo={memo} />;
    });

    return (<div className={'memos'}>{memos}</div>);
  }
}

export default Memos;
