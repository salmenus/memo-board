import React from 'react';
import { t } from 'i18next';
import styles from './Footer.css';

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <span>{t('footer message')}</span>
    </footer>);
};

export default Footer;
