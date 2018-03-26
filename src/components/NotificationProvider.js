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
      .throttleTime(2000)
      .subscribe(ntofication => {
        for(const callback of this.callbacks) {
          callback(ntofication);
        }
      });
  }

  notify(message, type) {
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