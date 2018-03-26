import React, { Component } from 'react';
import { connect } from 'react-redux';
import Memo from './memo/Memo';
import './MemosList.css';
import LoadingSpinner from './LoadingSpinner';
import MemosSortOptions from './MemosSortOptions';

class Memos extends Component {

  getMemoTags() {
    return this.props.memos.map(memo =>
      (<Memo key={memo.id} memo={memo}
             toggleEditingMode={memo.mostRecent && !memo.title && !memo.body} />)
    );
  }

  render() {
    if(!Array.isArray(this.props.memos)) {
      return <LoadingSpinner />;
    }

    const memoTags = this.getMemoTags();
    return (
      <div>
        <MemosSortOptions />
        <div className={'memos'}>{memoTags}</div>
      </div>);
  }
}

const mapStateToProps = state => ({
  memos: state.memos
});

export default connect(mapStateToProps, null)(Memos);
