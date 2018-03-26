import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Notification.css';

export default class extends Component {

  constructor() {
    super();
    this.processNotification = this.processNotification.bind(this);
  }

  componentDidMount() {
    this.context.subscribeToNotifications(this.processNotification);
  }

  componentWillUnmount() {
    this.context.unsubscribeFromNotifications(this.processNotification);
  }

  processNotification(notification) {
    console.dir(notification);
  }

  render() {
    return <div className={'notifications'}>
      <span>NOTIFICATIONS</span>
    </div>;
  }

  static contextTypes = {
    subscribeToNotifications: PropTypes.func.isRequired,
    unsubscribeFromNotifications: PropTypes.func.isRequired
  };
}
