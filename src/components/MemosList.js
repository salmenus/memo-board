import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Memo from './memo/Memo';
import './MemosList.css';
import LoadingSpinner from './LoadingSpinner';
import loadMemos from './../data/loadMemos';

class Memos extends Component {

  componentWillMount() {
    loadMemos({store: this.context.store});
  }

  render() {

    if(Array.isArray(this.props.memos) === false) {
      return <LoadingSpinner />;
    }

    const memoTags = this.props.memos.map(memo => <Memo key={memo.id} memo={memo} toggleEditingMode={memo.mostRecent} />);
    return (<div className={'memos'}>{memoTags}</div>);
  }
}

Memos.contextTypes = {
  store: PropTypes.object
};

const mapStateToProps = state => ({
  memos: (state.memos) ? [...state.memos] : null
});

export default connect(mapStateToProps, null)(Memos);
