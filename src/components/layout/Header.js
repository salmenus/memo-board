import React from 'react';
import { t } from 'i18next';
import CSSModules from 'react-css-modules';
import NewMemoButton from '../NewMemoButton';
import styles from './Header.css';

const Header = () => {
  return (
    <header styleName={'header'}>
      <h1 styleName={'title'}>
        <span styleName={'logo'} />
        <span>{t('app name')}</span>
        </h1>
      <div styleName={'actions'}>
        <NewMemoButton />
      </div>
    </header>);
};

export default CSSModules(Header, styles);
