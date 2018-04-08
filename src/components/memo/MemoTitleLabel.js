import React from 'react';
import memoTitleStyles from './MemoTitle.css';
import memoTitleTextStyles from './MemoTitleLabel.css';

const MemoTitleLabel = (props) => (
  <div
    className={memoTitleStyles['memo-title']}
    tabIndex={0}
    onFocus={props.onClick}
    onClick={props.onClick}>
    <span className={memoTitleTextStyles['memo-title-text']} title={props.title}>{props.title}</span>
  </div>
);

export default MemoTitleLabel;
