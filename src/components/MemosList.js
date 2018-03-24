import React, { Component } from 'react';
import Memo from './memo/Memo';
import './MemosList.css'

class Memos extends Component {

  constructor() {
    super();

    this.state = {
      memos: []
    };

    import("../data/mock-memos").then(memos => {
      this.setState({memos:memos.default});
    })
  }

  render() {

    const memos = this.state.memos.map((memo) => {
      return <Memo key={memo.id} memo={memo} />;
    });

    return (<div className={'memos'}>{memos}</div>);
  }
}

export default Memos;
