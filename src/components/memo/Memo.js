import React, { Component } from 'react';
import './Memo.css'
import MemoBar from "./MemoBar";

class Memo extends Component {

  render() {
    const memo = this.props.data;
    return (
      <div className={'memo'}>
        <MemoBar data={memo} />
      </div>
    );
  }
}

export default Memo;
