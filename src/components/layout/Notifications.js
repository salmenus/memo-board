import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Notification.css';
import NotificationMessage from './NotificationMessage';

export default class extends Component {

  constructor() {
    super();
    this.processNotification = this.processNotification.bind(this);
  }

  componentDidMount() {
    this.context.notifier.subscribe(this.processNotification);
  }

  componentWillUnmount() {
    this.context.notifier.unsubscribe(this.processNotification);
  }

  processNotification(notification) {
    console.dir(notification);
  }

  render() {
    return <div className={'notifications'}>
      <NotificationMessage
        message={'Notifications message that spreads over multiple line ... line 1 line 2 ... and much much much more ...'}
        messageType={'info'}
      />
    </div>;
  }

  static contextTypes = {
    notifier: PropTypes.object.isRequired
  };
}
