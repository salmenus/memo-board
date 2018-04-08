import React, { Component } from 'react';
import updateMemo from '../../dataHandlers/updateMemo';
import PropTypes from 'prop-types';
import MemoBodyText from './MemoBodyText';
import MemoBodyInput from './MemoBodyInput';
import {t} from 'i18next';

class MemoBody extends Component {

  constructor(props) {
    super(props);
    this.form = {input: null};
    this.state = {
      body: props.memo.body,
      editing: false
    };

    this.handleInputRefUpdate = this.handleInputRefUpdate.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
    this.handleBodyTextClick = this.handleBodyTextClick.bind(this);
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
    this.form.input = input;
    this.form.inputInitialValue = input.value;
    input.focus();
  }

  endEditing() {
    this.setState({editing: false});
    this.updateBody();
  }

  handleInputRefUpdate(input) {
    if(input) {
      this.startEditing(input);
    }
  }

  handleInputBlur() {
    this.endEditing();
  }

  handleBodyTextClick() {
    this.toggleEditingMode();
  }

  render() {
    return (this.state.editing) ?
      (<MemoBodyInput body={this.state.body} onRefUpdate={this.handleInputRefUpdate} onBlur={this.handleInputBlur} />):
      (<MemoBodyText body={this.state.body} onClick={this.handleBodyTextClick} />);
  }

  static propTypes = {
    memo: PropTypes.shape({
      id: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    }).isRequired
  };

  static contextTypes = {
    store: PropTypes.object.isRequired,
    notifier: PropTypes.object.isRequired
  };
}

export default MemoBody;
