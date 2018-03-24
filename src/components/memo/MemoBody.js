import React, { Component } from 'react';
import './MemoBody.css'

class MemoBody extends Component {

  constructor(props) {
    super(props);
    this.state = {
      body: props.memo.body,
      editing: false
    };
  }

  toggleEditingMode() {
    if(this.state.editing === false) {
      this.setState({editing: true});
    }
  }

  startEditing(input) {
    if(input && typeof input.focus === 'function') {
      input.focus();
    }
  }

  endEditing() {
    this.setState({editing: false});
  }

  updateBody(event) {
    if(event && event.target && event.target.value) {
      this.setState({body: event.target.value});
    }
  }

  render() {

    if(this.state.editing === false) {
      return (
        <div
          className={'memo-body'}
          tabIndex={0}
          onFocus={this.toggleEditingMode.bind(this)}
          onClick={this.toggleEditingMode.bind(this)}>
          <p className={'memo-body-text'}>{this.state.body}</p>
        </div>
      );
    }

    return <div className={'memo-body editing'}>
      <textarea className={'memo-body-input'}
        defaultValue={this.state.body}
        onBlur={this.endEditing.bind(this)}
        onChange={this.updateBody.bind(this)}
        ref={this.startEditing.bind(this)}
      />
    </div>;
  }
}

export default MemoBody;
