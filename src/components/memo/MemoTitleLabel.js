import React from 'react';
import './MemoTitleLabel.css';

const MemoTitleLabel = (props) => (
  <div
    className={'memo-title'}
    tabIndex={0}
    onFocus={props.onClick}
    onClick={props.onClick}>
    <span className={'memo-title-text'} title={props.title}>{props.title}</span>
  </div>
);

export default MemoTitleLabel;
