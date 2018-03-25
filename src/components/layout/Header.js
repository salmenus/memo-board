import React from 'react';
import { t } from 'i18next';
import NewMemo from '../NewMemoButton';
import './Header.css';

const Header = () => {
  return (
    <header className={'header'}>
      <h1 className={'title'}>
        <span className={'logo'} />
        <span>{t('app name')}</span>
        </h1>
      <div className={'actions'}>
        <NewMemo />
      </div>
    </header>);
};

export default Header;
