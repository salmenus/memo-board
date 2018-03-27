import React from 'react';
import './MemoBodyText.css';

export default (props) => (<div
  className={'memo-body'}
  tabIndex={0}
  title={props.body}
  onFocus={props.onClick}
  onClick={props.onClick}>
  <p className={'memo-body-text'}>{props.body}</p>
</div>);
