import React from 'react';
import './NotificationMessage.css';

const NotificationMessage = (props) => (
  <div className={`notification-message message-type-${props.type}`}>
    <p>{props.message}</p>
  </div>
);

export default NotificationMessage;
