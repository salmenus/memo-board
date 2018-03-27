import React from 'react';
import './MemoBodyInput.css';

export default (props) => (
  <div className={'memo-body editing'}>
      <textarea className={'memo-body-input'}
                defaultValue={props.body}
                ref={props.onRefUpdate}
                onBlur={props.onBlur}
                maxLength={140}
      />
  </div>
);
