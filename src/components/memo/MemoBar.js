import React, { Component } from 'react';
import { t } from 'i18next';
import './MemoBar.css'

class MemoBar extends Component {

  render() {
    const memo = this.props.data;
    return (
      <div className={'memo-bar'}>
        <span className={'title'}>{memo.title}</span>
        <button className={'delete'}>{t('delete memo')}</button>
      </div>
    );
  }
}

export default MemoBar;
