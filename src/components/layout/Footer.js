import React from 'react';
import { t } from 'i18next';
import './Footer.css';

const Footer = () => {
  return (
    <footer className={'footer'}>
      <span>{t('footer message')}</span>
    </footer>);
};

export default Footer;
