import React from 'react';
import styles from './NotificationMessage.css';

const NotificationMessage = (props) => (
  <div className={
    [
      styles['notification-message'],
      styles[`message-type-${props.type}`]
    ].join(' ')
  }>
    <p>{props.message}</p>
  </div>
);

export default NotificationMessage;
