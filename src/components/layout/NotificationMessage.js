import React from 'react';
import './NotificationMessage.css';

export default (props) => (
  <div className={`notification-message message-type-${props.type}`}>
    <p>{props.message}</p>
  </div>
)
