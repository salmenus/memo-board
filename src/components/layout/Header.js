import React from 'react';
import { t } from 'i18next';
import './Header.css';

const Header = () => {
  return (
    <header className={'header'}>
      <h1>{t('app name')}</h1>
    </header>);
};

export default Header;
