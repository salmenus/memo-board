import React, { Component } from 'react';
import { t } from 'i18next';
import './MemoDeleteButton.css'
import deleteMemo from './../../data/deleteMemo';
import PropTypes from "prop-types";

class MemoDeleteButton extends Component {

  constructor() {
    super();
    this.state = {
      isDeletingMemo: false
    };
  }

  delete () {
    this.setState({isDeletingMemo: true});
    deleteMemo({
      store: this.context.store,
      id: this.props.memo.id
    })
      .catch(() => {
        this.setState({isDeletingMemo: false});
      });
  }

  render() {
    return (
      <button
        className={'memo-delete-button'}
        title={t('delete memo')}
        disabled={this.state.isDeletingMemo}
        onClick={this.delete.bind(this)}
      >{t('delete memo')}</button>
    );
  }
}

MemoDeleteButton.contextTypes = {
  store: PropTypes.object
};

export default MemoDeleteButton;
