import React from 'react';
import './MemoBar.css';
import MemoTitle from './MemoTitle';
import DeleteMemoButton from './DeleteMemoButton';

export default (props) => (
  <div className={'memo-bar'}>
    <MemoTitle
      memo={props.memo}
      toggleEditingMode={props.toggleEditingMode} />
    <DeleteMemoButton
      memo={props.memo}
      onUpdateStart={props.onUpdateStart}
      onUpdateEnd={props.onUpdateEnd}/>
  </div>
);
