import React, { Component } from 'react';
import { t } from 'i18next';
import './MemoBar.css'
import MemoTitle from './MemoTitle';

class MemoBar extends Component {

  render() {
    return (
      <div className={'memo-bar'}>
        <MemoTitle memo={this.props.memo} />
        <button className={'delete'} title={t('delete memo')}>{t('delete memo')}</button>
      </div>
    );
  }
}

export default MemoBar;
