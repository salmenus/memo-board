import React, { Component } from 'react';
import { t } from 'i18next';
import CSSModules from 'react-css-modules';
import styles from './MemosSortOptions.css';

class MemosSortOptions extends Component {

  constructor(props) {
    super(props);
    this.handleSortOptionUpdated = this.handleSortOptionUpdated.bind(this);
  }

  handleSortOptionUpdated(event) {
    if(event.target.value && typeof this.props.onSortKeyUpdated === 'function') {
      this.props.onSortKeyUpdated(event.target.value);
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (<div styleName={'memos-sort-options'}>
      <span styleName={'sort-by-label'}>{ t('sort memos by') }</span>
      <select styleName={'sort-options'} tabIndex={0} onChange={this.handleSortOptionUpdated}>
        <option value='date'>{ t('sort by - date') }</option>
        <option value='title'>{ t('sort by - title') }</option>
      </select>
    </div>);
  }
}

export default CSSModules(MemosSortOptions, styles);
