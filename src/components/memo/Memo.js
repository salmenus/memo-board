import React, { Component } from 'react';
import './Memo.css';
import MemoBar from './MemoBar';
import MemoBody from './MemoBody';

class Memo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      updating: false
    };
    this.onUpdateStart = this.onUpdateStart.bind(this);
    this.onUpdateEnd = this.onUpdateEnd.bind(this);
  }

  onUpdateStart() {
    this.setState({updating: true});
  };

  onUpdateEnd() {
    this.setState({updating: false});
  };

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.memo.id !== this.props.memo.id ||
      nextProps.memo.title !== this.props.memo.title ||
      nextProps.memo.body !== this.props.memo.body ||
      nextProps.toggleEditingMode !== this.props.toggleEditingMode ||
      nextState.updating !== this.state.updating);
  }

  render() {
    return (
      <div className={`memo` + ((this.state.updating) ? ' updating' : '')}>
        <MemoBar memo={this.props.memo}
                 toggleEditingMode={this.props.toggleEditingMode}
                 onUpdateStart={this.onUpdateStart}
                 onUpdateEnd={this.onUpdateEnd} />
        <MemoBody memo={this.props.memo} />
      </div>
    );
  }
}

export default Memo;
