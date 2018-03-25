import React, { Component } from 'react';
import './MemoTitle.css';
import updateMemo from './../../data/updateMemo';
import PropTypes from "prop-types";

class MemoTitle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: props.memo.title,
      editing: false
    };

    this.form = {
      input: null
    };
  }

  componentDidMount() {
    if(this.props.toggleEditingMode === true) {
      this.toggleEditingMode();
    }
  }

  updateTitle = () => {

    // Check that title has changed before starting update
    const newTitle = this.form.input.value;
    if(newTitle === this.form.inputInitialValue) {
      return;
    }

    this.setState({title: newTitle});

    updateMemo({
      store: this.context.store,
      memo: {...this.props.memo, title: newTitle}})
      // Reset old title in case of failure to update
      .catch((error) => this.setState({title: this.form.inputInitialValue}));
  };

  toggleEditingMode = () => {
    if(this.state.editing === false) {
      this.setState({editing: true});
    }
  };

  startEditing = (input) => {
    if(input !== null) {
      this.form.input = input;
      this.form.inputInitialValue = input.value;
      input.focus();
    }
  };

  endEditing = () => {
    this.setState({editing: false});
    this.updateTitle();
  };

  handleKeyPress = (event) => {
    if (event && event.key === 'Enter' && this.form.input) {
      this.form.input.blur();
    }
  };

  render() {

    if(this.state.editing === false) {
      return <div
        className={'memo-title'}
        tabIndex={0}
        onFocus={this.toggleEditingMode}
        onClick={this.toggleEditingMode}>
        <span className={'memo-title-text'} title={this.state.title}>{this.state.title}</span>
      </div>;
    }

    return <div className={'memo-title editing'}>
      <input className={'memo-title-input'}
        defaultValue={this.state.title}
        onBlur={this.endEditing}
        onKeyPress={this.handleKeyPress}
        ref={this.startEditing}
        maxLength={140}
      />

    </div>
  }
}

MemoTitle.contextTypes = {
  store: PropTypes.object
};

export default MemoTitle;
