import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Notification.css';

export default class extends Component {

  constructor() {
    super();
    this.processNotification = this.processNotification.bind(this);
  }

  componentDidMount() {
    this.context.subscribe(this.processNotification);
  }

  componentWillUnmount() {
    this.context.unsubscribe(this.processNotification);
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
    subscribe: PropTypes.func.isRequired,
    unsubscribe: PropTypes.func.isRequired
  };
}
