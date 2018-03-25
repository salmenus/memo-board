import React, { Component } from 'react';
import './Memo.css'
import MemoBar from "./MemoBar";
import MemoBody from "./MemoBody"

class Memo extends Component {

  constructor() {
    super();

    this.state = {
      updating: false
    };
  }

  onUpdateStart = () => {
    this.setState({updating: true});
  };

  onUpdateEnd = () => {
    this.setState({updating: false});
  };

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
