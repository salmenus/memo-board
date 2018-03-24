import React, { Component } from 'react';
import Memo from './Memo';
import './Memos.css'

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
      return <Memo key={memo.id} data={memo} />;
    });

    return (<div className={'memos'}>{memos}</div>);
  }
}

export default Memos;
