import React, { Component } from 'react';
import './Memo.css'
import MemoBar from "./MemoBar";
import MemoBody from "./MemoBody"

class Memo extends Component {

  render() {
    const memo = this.props.memo;
    return (
      <div className={`memo` + ((memo.isNew) ? ' new-memo' : '')}>
        <MemoBar memo={memo} />
        <MemoBody memo={memo} />
      </div>
    );
  }
}

export default Memo;
