import React, { Component } from 'react';
import { t } from 'i18next';
import './MemosSortOptions.css';

export default class extends Component {

  constructor() {
    super();
    this.handleSortOptionUpdated = this.handleSortOptionUpdated.bind(this);
  }

  handleSortOptionUpdated(event) {
    if(event.target.value && typeof this.props.onSortKeyUpdated === 'function') {
      this.props.onSortKeyUpdated(event.target.value);
    }
  }

  render() {
    return (<div className={'memos-sort-options'}>
      <span className={'sort-by-label'}>{ t('sort memos by') }</span>
      <select className={'sort-options'} tabIndex={0} onChange={this.handleSortOptionUpdated}>
        <option value='date'>{ t('sort by - date') }</option>
        <option value='title'>{ t('sort by - title') }</option>
      </select>
    </div>);
  }
}
