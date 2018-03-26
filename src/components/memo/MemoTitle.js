import React, { Component } from 'react';
import { t } from 'i18next';
import updateMemo from './../../data/updateMemo';
import PropTypes from 'prop-types';
import MemoTitleLabel from './MemoTitleLabel';
import MemoTitleInput from './MemoTitleInput';
import './MemoTitle.css';

export default class extends Component {

  constructor(props) {
    super(props);
    this.form = {input: null};
    this.state = {
      title: props.memo.title,
      editing: false
    };

    this.toggleEditingMode = this.toggleEditingMode.bind(this);
    this.startEditing = this.startEditing.bind(this);
    this.endEditing = this.endEditing.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    if(this.props.toggleEditingMode) {
      this.toggleEditingMode();
    }
  }

  updateTitle() {
    const newTitle = this.form.input.value;
    if(newTitle !== this.form.inputInitialValue) {
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
    if(input) {
      this.form.input = input;
      this.form.inputInitialValue = input.value;
      input.focus();
    }
  }

  endEditing() {
    this.setState({editing: false});
    this.updateTitle();
  }

  handleKeyPress(event) {
    if (event && event.key === 'Enter' && this.form.input) {
      this.form.input.blur();
    }
  }

  render() {
    return (this.state.editing) ?
      (<MemoTitleInput title={this.state.title}
                      startEditing={this.startEditing}
                      endEditing={this.endEditing}
                      handleKeyPress={this.handleKeyPress} />) :
      (<MemoTitleLabel title={this.state.title}
                      toggleEditingMode={this.toggleEditingMode} />);
  }

  static contextTypes = {
    store: PropTypes.object.isRequired,
    notifier: PropTypes.object.isRequired
  };
}
