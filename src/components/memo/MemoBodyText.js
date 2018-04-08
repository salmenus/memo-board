import React from 'react';
import memoBodyStyles from './MemoBody.css'
import memoBodyTextStyles from './MemoBodyText.css';

const MemoBodyText = (props) => (<div
  className={memoBodyStyles['memo-body']}
  tabIndex={0}
  title={props.body}
  onFocus={props.onClick}
  onClick={props.onClick}>
  <p className={memoBodyTextStyles['memo-body-text']}>{props.body}</p>
</div>);

export default MemoBodyText;
