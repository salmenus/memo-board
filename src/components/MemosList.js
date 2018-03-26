import React, { Component } from 'react';
import { connect } from 'react-redux';
import Memo from './memo/Memo';
import './MemosList.css';
import LoadingSpinner from './LoadingSpinner';
import MemosSortOptions from './MemosSortOptions';

class Memos extends Component {

  constructor() {
    super();
    this.state = {sortKey: 'date'};
    this.updateSortKey = this.updateSortKey.bind(this);
  }

  sortByDate(memo1, memo2) {
    return memo2.creationDate.getTime() - memo1.creationDate.getTime();
  }

  sortByTitle(memo1, memo2) {
    return memo1.title.localeCompare(memo2.title);
  }

  getMemosSortComparator() {
    return this['sortBy' + this.state.sortKey[0].toUpperCase() + this.state.sortKey.slice(1)];
  }

  getMemoTags() {
    return this.props.memos
      .sort(this.getMemosSortComparator())
      .map(memo =>
        (<Memo key={memo.id} memo={memo}
             toggleEditingMode={memo.mostRecent && !memo.title && !memo.body} />)
    );
  }

  updateSortKey(newKey) {
    if(['date', 'title'].indexOf(newKey) > -1) {
      this.setState({sortKey: newKey});
    }
  }

  render() {
    if(!Array.isArray(this.props.memos)) {
      return <LoadingSpinner />;
    }

    const memoTags = this.getMemoTags();
    return (
      <div>
        <MemosSortOptions onSortKeyUpdated={this.updateSortKey} />
        <div className={'memos'}>{memoTags}</div>
      </div>);
  }
}

const mapStateToProps = state => ({
  memos: state.memos
});

export default connect(mapStateToProps, null)(Memos);
