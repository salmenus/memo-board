import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './LoadingSpinner.css'

const LoadingSpinner = () => (
  <div styleName={'loading-spinner'}>
    <div styleName={'dot-1'} />
    <div styleName={'dot-2'} />
  </div>
);

export default CSSModules(LoadingSpinner, styles);
