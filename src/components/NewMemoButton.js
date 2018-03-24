import React, { Component } from 'react';
import { t } from 'i18next';
import './NewMemoButton.css'

class NewMemo extends Component {

  render() {
    return <button className={'new-memo-button'}>{ t('create new memo') }</button>
  }
}

export default NewMemo;
