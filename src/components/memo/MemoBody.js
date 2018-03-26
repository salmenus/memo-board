import React, { Component } from 'react';
import './MemoBody.css'
import updateMemo from './../../data/updateMemo';
import PropTypes from 'prop-types';
import MemoBodyText from './MemoBodyText';
import MemoBodyInput from './MemoBodyInput';
import {t} from "i18next";

export default class extends Component {

  constructor(props) {
    super(props);
    this.form = {input: null};
    this.state = {
      body: props.memo.body,
      editing: false
    };

    this.startEditing = this.startEditing.bind(this);
    this.endEditing = this.endEditing.bind(this);
    this.toggleEditingMode = this.toggleEditingMode.bind(this);
  }

  updateBody() {
    const newBody = this.form.input.value;
    if(newBody !== this.form.inputInitialValue) {
      this.setState({body: newBody});

      updateMemo({store: this.context.store, memo: {id: this.props.memo.id, body: newBody}})
        .then(() => this.context.notifier.notify(t('notification - memo body update')))
        .catch(() => {
          this.context.notifier.notify(t('notification - memo body update error'), 'error');
          this.setState({body: this.form.inputInitialValue})
        });
    }
  }

  toggleEditingMode() {
    if(!this.state.editing) {
      this.setState({editing: true});
    }
  }

  startEditing(input) {
    if(input) {
      this.form.input = input;
      this.form.inputInitialValue = input.value;
      input.focus();
    }
  }

  endEditing() {
    this.setState({editing: false});
    this.updateBody();
  }

  render() {
    return (this.state.editing) ?
      (<MemoBodyInput body={this.state.body} startEditing={this.startEditing} endEditing={this.endEditing} />):
      (<MemoBodyText body={this.state.body} toggleEditingMode={this.toggleEditingMode} />);
  }

  static contextTypes = {
    store: PropTypes.object.isRequired,
    notifier: PropTypes.object.isRequired
  };
}
