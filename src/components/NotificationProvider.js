import { Component } from 'react';
import PropTypes from 'prop-types';
import { Observable } from 'rxjs';

export default class extends Component {

  constructor(props) {
    super(props);

    this.callbacks = new Set();

    this.initializeObservable();
    this.notify = this.notify.bind(this);
    this.subscribe = this.subscribe.bind(this);
    this.unsubscribe = this.unsubscribe.bind(this);
  }

  initializeObservable() {
    this.observable = Observable.create((observer) => {
      this.observer = observer;
    })
      // Throttle to a maximum of 1 new notification every 2 seconds
      // to avoid intrusive notifications and ensure better UX
      .throttleTime(1000)
      .subscribe(ntofication => {
        for(const callback of this.callbacks) {
          callback(ntofication);
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
