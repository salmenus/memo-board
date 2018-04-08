import React from 'react';
import CSSModules from 'react-css-modules';
import memoTitleStyles from './MemoTitle.css';
import memoTitleTextStyles from './MemoTitleLabel.css';

const styles = {...memoTitleStyles, ...memoTitleTextStyles};

const MemoTitleLabel = (props) => (
  <div
    styleName={'memo-title'}
    tabIndex={0}
    onFocus={props.onClick}
    onClick={props.onClick}>
    <span styleName={'memo-title-text'} title={props.title}>{props.title}</span>
  </div>
);

export default CSSModules(MemoTitleLabel, styles);
