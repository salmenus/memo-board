import React from 'react';
import styles from './MemoBody.css'

const MemoBodyInput = (props) => (
  <div className={['memo-body','editing'].map(className => styles[className]).join(' ')}>
      <textarea className={styles['memo-body-input']}
                defaultValue={props.body}
                ref={props.onRefUpdate}
                onBlur={props.onBlur}
                maxLength={140}
      />
  </div>
);

export default MemoBodyInput;
