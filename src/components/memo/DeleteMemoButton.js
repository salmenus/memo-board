import React, { Component } from 'react';
import { t } from 'i18next';
import styles from './DeleteMemoButton.css';
import deleteMemo from '../../dataHandlers/deleteMemo';
import PropTypes from 'prop-types';

class DeleteMemoButton extends Component {

  constructor(props) {
    super(props);
    this.state = {isDeletingMemo: false};
    this.handleClick = this.handleClick.bind(this);
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

  handleClick() {
    this.delete();
  }

  render() {
    return (
      <button
        className={styles['memo-delete-button']}
        title={t('delete memo')}
        disabled={this.state.isDeletingMemo}
        onClick={this.handleClick}
      >{t('delete memo')}</button>
    );
  }

  static contextTypes = {
    store: PropTypes.object.isRequired,
    notifier: PropTypes.object.isRequired
  };
}

export default DeleteMemoButton;
