import React, { Component } from 'react';
import { t } from 'i18next';
import updateMemo from '../../dataHandlers/updateMemo';
import PropTypes from 'prop-types';
import MemoTitleLabel from './MemoTitleLabel';
import MemoTitleInput from './MemoTitleInput';
import './MemoTitle.css';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: props.memo.title,
      editing: false
    };

    this.initialTitleValue = null;
    this.handleTitleLabelClick = this.handleTitleLabelClick.bind(this);
    this.handleInputRefUpdate = this.handleInputRefUpdate.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
    this.handleInputKeyPress = this.handleInputKeyPress.bind(this);
  }

  componentDidMount() {
    if(this.props.toggleEditingMode) {
      this.toggleEditingMode();
    }
  }

  updateTitle(newTitle) {
    if(newTitle !== this.initialTitleValue) {
      this.setState({title: newTitle});

      updateMemo({store: this.context.store, memo: {id: this.props.memo.id, title: newTitle}})
        .then(() => this.context.notifier.notify(t('notification - memo title update')))
        .catch((e) => {
          console.dir(e);
          this.setState({title: this.form.inputInitialValue});
          this.context.notifier.notify(t('notification - memo title update error'), 'error');
        });
    }
  }

  toggleEditingMode() {
    if(!this.state.editing) {
      this.setState({editing: true});
    }
  }

  startEditing(input)  {
    this.initialTitleValue = input.value;
    input.focus();
  }

  endEditing(input) {
    this.setState({editing: false});
    this.updateTitle(input.value);
  }

  handleInputRefUpdate(input) {
    if(input) {
      this.startEditing(input)
    }
  }

  handleInputBlur(event) {
    this.endEditing(event.target);
  }

  handleInputKeyPress(event) {
    if (event && event.key === 'Enter' && this.form.input) {
      this.form.input.blur();
    }
  }

  handleTitleLabelClick() {
    this.toggleEditingMode();
  }

  render() {
    return (this.state.editing) ?
      (<MemoTitleInput title={this.state.title}
                       onRefUpdate={this.handleInputRefUpdate}
                       onBlur={this.handleInputBlur}
                       onKeyPress={this.handleInputKeyPress} />) :
      (<MemoTitleLabel title={this.state.title}
                       onClick={this.handleTitleLabelClick} />);
  }

  static contextTypes = {
    store: PropTypes.object.isRequired,
    notifier: PropTypes.object.isRequired
  };
}
