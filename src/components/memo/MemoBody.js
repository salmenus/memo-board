import React, { Component } from 'react';
import './MemoBody.css'
import updateMemo from './../../data/updateMemo';
import PropTypes from "prop-types";

class MemoBody extends Component {

  constructor(props) {
    super(props);
    this.state = {
      body: props.memo.body,
      editing: false
    };

    this.form = {
      input: null
    };
  }

  updateBody = () => {

    // Check that body has changed before starting update
    const newBody = this.form.input.value;
    if(newBody === this.form.inputInitialValue) {
      return;
    }

    this.setState({body: newBody});

    updateMemo({
      store: this.context.store,
      memo: {...this.props.memo, body: newBody}})
    // Reset old body in case of failure to update
      .catch(() => this.setState({body: this.form.inputInitialValue}));
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
    this.updateBody();
  };

  render() {

    if(this.state.editing === false) {
      return (
        <div
          className={'memo-body'}
          tabIndex={0}
          title={this.state.body}
          onFocus={this.toggleEditingMode}
          onClick={this.toggleEditingMode}>
          <p className={'memo-body-text'}>{this.state.body}</p>
        </div>
      );
    }

    return <div className={'memo-body editing'}>
      <textarea className={'memo-body-input'}
        defaultValue={this.state.body}
        onBlur={this.endEditing}
        ref={this.startEditing}
        maxLength={140}
      />

    </div>;
  }

  static contextTypes = {
    store: PropTypes.object
  };
}

export default MemoBody;
