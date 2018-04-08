import React from 'react';
import { t } from 'i18next';
import CSSModules from 'react-css-modules';
import styles from './Footer.css';

const Footer = () => {
  return (
    <footer styleName={'footer'}>
      <span>{t('footer message')}</span>
    </footer>);
};

export default CSSModules(Footer, styles);
