import React, { Component } from 'react';
import './MemoBar.css';
import MemoTitle from './MemoTitle';
import MemoDeleteButton from './MemoDeleteButton';

class MemoBar extends Component {

  render() {
    return (
      <div className={'memo-bar'}>
        <MemoTitle memo={this.props.memo} />
        <MemoDeleteButton memo={this.props.memo} />
      </div>
    );
  }
}

export default MemoBar;
