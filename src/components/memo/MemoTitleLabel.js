import React from 'react';
import './MemoTitleLabel.css';

export default (props) => (
  <div
    className={'memo-title'}
    tabIndex={0}
    onFocus={props.onClick}
    onClick={props.onClick}>
    <span className={'memo-title-text'} title={props.title}>{props.title}</span>
  </div>
);
