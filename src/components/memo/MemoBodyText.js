import React from 'react';
import './MemoBodyText.css';

export default (props) => (<div
  className={'memo-body'}
  tabIndex={0}
  title={props.body}
  onFocus={props.toggleEditingMode}
  onClick={props.toggleEditingMode}>
  <p className={'memo-body-text'}>{props.body}</p>
</div>);
