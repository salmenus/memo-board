import React from 'react';
import './MemoTitleInput.css';

const MemoTitleInput = (props) => (
  <div className={'memo-title editing'}>
    <input className={'memo-title-input'}
           defaultValue={props.title}
           ref={props.onRefUpdate}
           onBlur={props.onBlur}
           onKeyPress={props.handleKeyPress}
           maxLength={140}
    />
  </div>
);

export default MemoTitleInput;
