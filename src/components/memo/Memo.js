import React, { Component } from 'react';
import './Memo.css'
import MemoBar from "./MemoBar";
import MemoBody from "./MemoBody"

class Memo extends Component {

  render() {
    return (
      <div className={'memo'}>
        <MemoBar memo={this.props.memo} />
        <MemoBody memo={this.props.memo} />
      </div>
    );
  }
}

export default Memo;
