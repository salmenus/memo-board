import React from 'react';
import './MemoTitleInput.css';

export default (props) => (
  <div className={'memo-title editing'}>
    <input className={'memo-title-input'}
           defaultValue={props.title}
           ref={props.startEditing}
           onBlur={props.endEditing}
           onKeyPress={props.handleKeyPress}
           maxLength={140}
    />
  </div>
);
