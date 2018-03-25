import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';
import './NewMemoButton.css'
import createNewMemo from './../data/createNewMemo';

class NewMemo extends Component {

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
      .then(() => this.setState({isCreatingNewMemo: false}))
      .catch(() => this.setState({isCreatingNewMemo: false}));
  }

  render() {
    return <button
      className={'new-memo-button'}
      onClick={this.createNewMemo}
      disabled={this.state.isCreatingNewMemo}>{ t('create new memo') }</button>
  }

  static contextTypes = {
    store: PropTypes.object
  };
}

export default NewMemo;
