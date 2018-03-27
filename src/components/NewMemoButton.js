import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';
import './NewMemoButton.css'
import createNewMemo from '../dataHandlers/createNewMemo';

class NewMemoButton extends Component {

  constructor() {
    super();
    this.state = {
      isCreatingNewMemo: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  createNewMemo() {
    this.setState({isCreatingNewMemo: true});
    createNewMemo({store: this.context.store})
      .then(() => this.context.notifier.notify(t('notification - new memo added')))
      .catch(() => this.context.notifier.notify(t('notification - new memo error'), 'error'))
      .finally(() => this.setState({isCreatingNewMemo: false}))
  }

  handleClick() {
    this.createNewMemo();
  }

  render() {
    return (<button
      className={'new-memo-button'}
      onClick={this.handleClick}
      disabled={this.state.isCreatingNewMemo}>{ t('create new memo') }</button>);
  }

  static contextTypes = {
    store: PropTypes.object.isRequired,
    notifier: PropTypes.object.isRequired
  };
}

export default NewMemoButton;
