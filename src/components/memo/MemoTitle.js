import React, { Component } from 'react';
import './MemoTitle.css'

class MemoTitle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: props.memo.title,
      editing: false
    };
  }

  toggleEditingMode() {
    if(this.state.editing === false) {
      this.setState({editing: true});
    }
  }

  startEditing(input) {
    if(input) {
      input.focus();
    }
  }

  endEditing() {
    this.setState({editing: false});
  }

  updateTitle(event) {
    if(event && event.target && event.target.value) {
      this.setState({title: event.target.value});
    }
  }

  render() {
    if(this.state.editing === false) {
      return <div
            className={'memo-title'}
            tabIndex={0}
            onFocus={this.toggleEditingMode.bind(this)}
            onClick={this.toggleEditingMode.bind(this)}>
        <span className={'memo-title-text'}>{this.state.title}</span>
      </div>;
    }

    return <div className={'memo-title editing'}>
      <input className={'memo-title-input'}
             defaultValue={this.state.title}
             onBlur={this.endEditing.bind(this)}
             onChange={this.updateTitle.bind(this)}
             ref={this.startEditing.bind(this)}
      />

    </div>
  }
}

export default MemoTitle;
