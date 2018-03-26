import React from 'react';
import { t } from 'i18next';
import './Footer.css';

export default () => {
  return (
    <footer className={'footer'}>
      <span>{t('footer message')}</span>
    </footer>);
};
