import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';
import './NewMemoButton.css'
import createNewMemo from './../data/createNewMemo';

export default class extends Component {

  constructor() {
    super();
    this.state = {
      isCreatingNewMemo: false
    };

    this.createNewMemo = this.createNewMemo.bind(this);
  }

  createNewMemo() {
    this.setState({isCreatingNewMemo: true});
    createNewMemo({store: this.context.store})
      .then(() => {
        this.setState({isCreatingNewMemo: false});
        this.context.notify('NEW MEMO ADDED', 'success');
      })
      .catch(() => {
        this.setState({isCreatingNewMemo: false});
        this.context.notify('ERROR WHILE ADDING NOTIFICATIONS', 'error');
      });
  }

  render() {
    return (<button
      className={'new-memo-button'}
      onClick={this.createNewMemo}
      disabled={this.state.isCreatingNewMemo}>{ t('create new memo') }</button>);
  }

  static contextTypes = {
    store: PropTypes.object.isRequired,
    notify: PropTypes.func.isRequired
  };
}
