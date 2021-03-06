import { Component } from 'react';
import PropTypes from 'prop-types';
import { Observable } from 'rxjs';

class NotificationProvider extends Component {

  constructor(props) {
    super(props);
    this.callbacks = new Set();
    this.initializeObservable();

    this.notify = this.notify.bind(this);
    this.subscribe = this.subscribe.bind(this);
    this.unsubscribe = this.unsubscribe.bind(this);
  }

  static notificationsThrottlingDurationInMilliseconds = 800;

  initializeObservable() {
    this.observable = Observable.create((observer) => {
      this.observer = observer;
    })
      // Throttle to a maximum of 1 new notification every 800 milliseconds
      // to avoid intrusive notifications and ensure better UX.
      .throttleTime(this.constructor.notificationsThrottlingDurationInMilliseconds)
      .subscribe(notofication => {
        for(const callback of this.callbacks) {
          callback(notofication);
        }
      });
  }

  notify(message, type = 'info') {
    this.observer.next({
      message,
      type
    });
  }

  subscribe(callback) {
    this.callbacks.add(callback);
  }

  unsubscribe(callback) {
    this.callbacks.delete(callback);
  }

  getChildContext() {
    return {
      notifier: {
        notify: this.notify,
        subscribe: this.subscribe,
        unsubscribe: this.unsubscribe
      }
    };
  }

  render() {
    return this.props.children;
  }

  static childContextTypes = {
    notifier: PropTypes.object
  };
}

export default NotificationProvider;
