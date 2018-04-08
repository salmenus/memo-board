import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './ErrorIcon.css';

const ErrorIcon = () => (<div styleName={'error-icon'}><span styleName={'icon'} /></div>);

export default CSSModules(ErrorIcon, styles);
