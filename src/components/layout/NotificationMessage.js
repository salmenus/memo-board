import React from 'react';
import styles from './NotificationMessage.css';
import CSSModules from 'react-css-modules';

const NotificationMessage = (props) => (
  <div styleName={`notification-message`}>
    <p>{props.message}</p>
  </div>
);

export default CSSModules(NotificationMessage, styles);
