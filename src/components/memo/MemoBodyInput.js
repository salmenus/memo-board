import React from 'react';
import './MemoBodyInput.css';

export default (props) => (
  <div className={'memo-body editing'}>
      <textarea className={'memo-body-input'}
                defaultValue={props.body}
                ref={props.startEditing}
                onBlur={props.endEditing}
                maxLength={140}
      />
  </div>
);
