import React from 'react';
import CSSModules from 'react-css-modules';
import memoBodyStyles from './MemoBody.css'
import memoBodyTextStyles from './MemoBodyText.css';

const styles = {...memoBodyStyles, ...memoBodyTextStyles};

const MemoBodyText = (props) => (<div
  styleName={'memo-body'}
  tabIndex={0}
  title={props.body}
  onFocus={props.onClick}
  onClick={props.onClick}>
  <p styleName={'memo-body-text'}>{props.body}</p>
</div>);

export default CSSModules(MemoBodyText, styles);
