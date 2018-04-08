import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.css';
import CSSModules from 'react-css-modules';
import NotificationMessage from './NotificationMessage';

class Notifications extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notifications: new Set()
    };

    this.processNotification = this.processNotification.bind(this);
  }

  componentDidMount() {
    this.context.notifier.subscribe(this.processNotification);
  }

  componentWillUnmount() {
    this.context.notifier.unsubscribe(this.processNotification);
  }

  static notificationDisplayDurationInMilliseconds = 3000;

  processNotification(notification) {
    if(notification && notification.message && notification.type) {
      const newNotification = {
        message: notification.message,
        type: notification.type
      };

      this.setState({
        notifications: new Set([newNotification, ...this.state.notifications])
      });

      this.autoDeleteNotification(newNotification);
    }
  }

  deleteNotification(notification) {
    this.state.notifications.delete(notification);
    this.setState({notifications: new Set([...this.state.notifications])});
  }

  autoDeleteNotification(notification) {
    setTimeout(() => this.deleteNotification(notification), this.constructor.notificationDisplayDurationInMilliseconds);
  }

  getNotificationsToDisplay() {
    const result = [];
    let index = 0;
    for(const notification of this.state.notifications) {
      result.push(
        <NotificationMessage
          key={index++}
          message={notification.message}
          type={notification.type}
        />
      );
    }
    return result;
  }

  render() {
    const notifications = this.getNotificationsToDisplay();
    return <div styleName={'notifications'}>{notifications}</div>;
  }

  static contextTypes = {
    notifier: PropTypes.object.isRequired
  };
}

export default CSSModules(Notifications, styles);
