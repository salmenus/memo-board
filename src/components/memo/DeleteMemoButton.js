import React, { Component } from 'react';
import { t } from 'i18next';
import './DeleteMemoButton.css';
import deleteMemo from '../../dataHandlers/deleteMemo';
import PropTypes from 'prop-types';

export default class extends Component {

  constructor() {
    super();
    this.state = {isDeletingMemo: false};
    this.delete = this.delete.bind(this);
  }

  delete() {

    this.setState({isDeletingMemo: true});

    if(typeof this.props.onUpdateStart === 'function') {
      this.props.onUpdateStart();
    }

    deleteMemo({
      store: this.context.store,
      id: this.props.memo.id
    })
      .then(() => this.context.notifier.notify(t('notification - memo deleted')))
      .catch(() => {
        this.setState({isDeletingMemo: false});
        this.context.notifier.notify(t('notification - memo delete error'), 'error');
        if(typeof this.props.onUpdateEnd === 'function') {
          this.props.onUpdateEnd();
        }
      });
  };

  render() {
    return (
      <button
        className={'memo-delete-button'}
        title={t('delete memo')}
        disabled={this.state.isDeletingMemo}
        onClick={this.delete}
      >{t('delete memo')}</button>
    );
  }

  static contextTypes = {
    store: PropTypes.object.isRequired,
    notifier: PropTypes.object.isRequired
  };
}
