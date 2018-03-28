import React, { Component } from 'react';
import { connect } from 'react-redux';
import { t } from 'i18next';
import Memo from './memo/Memo';
import './Memos.css';
import LoadingSpinner from './LoadingSpinner';
import ErrorIcon from './ErrorIcon';
import MemosSortOptions from './MemosSortOptions';
import loadMemos from '../dataHandlers/loadMemos';
import PropTypes from 'prop-types';

class Memos extends Component {

  constructor(props) {
    super(props);
    this.state = {sortKey: 'date', memosLoadingState: 'loading'};
    this.handleSortKeyUpdated = this.handleSortKeyUpdated.bind(this);
  }

  componentDidMount() {
    loadMemos({store: this.context.store})
      .catch(() => {
        this.context.notifier.notify(t('notification - memos loading error'), 'error');
        this.setState({memosLoadingState: 'error'});
      });
  }

  static supportedSortKeys = ['date', 'title'];

  static sortByDate(memo1, memo2) {
    return memo2.creationDate.getTime() - memo1.creationDate.getTime();
  }

  static sortByTitle(memo1, memo2) {
    return memo1.title.localeCompare(memo2.title);
  }

  getMemosSortComparator() {
    return this.constructor['sortBy' + this.state.sortKey[0].toUpperCase() + this.state.sortKey.slice(1)];
  }

  getMemoTags() {
    return this.props.memos
      .sort(this.getMemosSortComparator())
      .map(memo =>
        (<Memo key={memo.id} memo={memo}
             toggleEditingMode={memo.mostRecent && !memo.title && !memo.body} />)
    );
  }

  handleSortKeyUpdated(newKey) {
    if(this.constructor.supportedSortKeys.indexOf(newKey) > -1) {
      this.setState({sortKey: newKey});
    }
  }

  render() {

    if(this.state.memosLoadingState === 'error') {
      return <ErrorIcon />;
    }

    if(this.props.isFetching) {
      return <LoadingSpinner />;
    }

    const memoTags = this.getMemoTags();
    return (
      <div className={'memos-container'}>
        <MemosSortOptions onSortKeyUpdated={this.handleSortKeyUpdated} />
        <div className={'memos'}>{memoTags}</div>
      </div>);
  }

  static contextTypes = {
    store: PropTypes.object.isRequired,
    notifier: PropTypes.object.isRequired
  };
}

const mapStateToProps = state => ({
  isFetching: state.memos.isFetching,
  memos: state.memos.items
});

export default connect(mapStateToProps, null)(Memos);
