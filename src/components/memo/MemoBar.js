import React, { Component } from 'react';
import './MemoBar.css';
import MemoTitle from './MemoTitle';
import DeleteMemoButton from './DeleteMemoButton';

class MemoBar extends Component {

  render() {
    return (
      <div className={'memo-bar'}>
        <MemoTitle memo={this.props.memo} />
        <DeleteMemoButton memo={this.props.memo}
          onUpdateStart={this.props.onUpdateStart}
          onUpdateEnd={this.props.onUpdateEnd}/>
      </div>
    );
  }
}

export default MemoBar;
