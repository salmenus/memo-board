import React, { Component } from 'react';
import './MemoBody.css'

class MemoBody extends Component {

  render() {
    return (
      <div className={'memo-body'}>
        <p>{this.props.memo.body}</p>
      </div>
    );
  }
}

export default MemoBody;
