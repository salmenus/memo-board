import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './MemoBody.css'

const MemoBodyInput = (props) => (
  <div styleName={['memo-body','editing'].join(' ')}>
      <textarea styleName={'memo-body-input'}
                defaultValue={props.body}
                ref={props.onRefUpdate}
                onBlur={props.onBlur}
                maxLength={140}
      />
  </div>
);

export default CSSModules(MemoBodyInput, styles, {allowMultiple: true});
