import React from 'react';
import { t } from 'i18next';
import NewMemo from './../NewMemo';
import './Header.css';

const Header = () => {
  return (
    <header className={'header'}>
      <h1 className={'title'}>{t('app name')}</h1>
      <div className={'actions'}>
        <NewMemo />
      </div>
    </header>);
};

export default Header;
