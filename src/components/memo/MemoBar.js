import React from 'react';
import styles from './MemoBar.css';
import MemoTitle from './MemoTitle';
import DeleteMemoButton from './DeleteMemoButton';

const MemoBar = (props) => (
  <div className={styles['memo-bar']}>
    <MemoTitle
      memo={props.memo}
      toggleEditingMode={props.toggleEditingMode} />
    <DeleteMemoButton
      memo={props.memo}
      onUpdateStart={props.onUpdateStart}
      onUpdateEnd={props.onUpdateEnd}/>
  </div>
);

export default MemoBar;
