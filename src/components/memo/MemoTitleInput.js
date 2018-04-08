import React from 'react';
import memoTitleStyles from './MemoTitle.css';
import memoTitleInputStyles from './MemoTitleInput.css';

const MemoTitleInput = (props) => (
  <div className={['memo-title','editing'].map(className => memoTitleStyles[className]).join(' ')}>
    <input className={memoTitleInputStyles['memo-title-input']}
           defaultValue={props.title}
           ref={props.onRefUpdate}
           onBlur={props.onBlur}
           onKeyPress={props.handleKeyPress}
           maxLength={140}
    />
  </div>
);

export default MemoTitleInput;
