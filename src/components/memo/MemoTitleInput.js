import React from 'react';
import CSSModules from 'react-css-modules';
import memoTitleStyles from './MemoTitle.css';
import memoTitleInputStyles from './MemoTitleInput.css';

const styles = {...memoTitleStyles, ...memoTitleInputStyles};

const MemoTitleInput = (props) => (
  <div styleName={['memo-title','editing'].join(' ')}>
    <input styleName={'memo-title-input'}
           defaultValue={props.title}
           ref={props.onRefUpdate}
           onBlur={props.onBlur}
           onKeyPress={props.handleKeyPress}
           maxLength={140}
    />
  </div>
);

export default CSSModules(MemoTitleInput, styles, {allowMultiple: true});
