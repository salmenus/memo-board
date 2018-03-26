import React, { Component } from 'react';
import { t } from 'i18next';
import './MemosSortOptions.css';

export default class extends Component {

  render() {
    return (<div className={'memos-sort-options'}>
      <span className={'sort-by-label'}>{ t('sort memos by') }</span>
      <select className={'sort-options'}>
        <option value='date'>Date</option>
        <option value='title'>Title</option>
      </select>
    </div>);
  }
}
