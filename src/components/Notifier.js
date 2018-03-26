import { Component } from 'react';
import PropTypes from 'prop-types';
import { Observable } from 'rxjs';

export default class Notifier extends Component {

  constructor(props) {
    super(props);

    this.observable = Observable.create((observer) => {
      this.observer = observer;
    })
      .delay(1000);

    this.notify = this.notify.bind(this);
  }

  notify(message, type) {
    this.observer.next({
      message,
      type
    });
  }

  getChildContext() {
    return {
      notify: this.notify,
      observable: this.observable
    };
  }

  render() {
    return this.props.children;
  }

  static childContextTypes = {
    notify: PropTypes.func,
    observable: PropTypes.object
  };
}
