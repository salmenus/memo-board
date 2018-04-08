import React from 'react';
import { t } from 'i18next';
import NewMemoButton from '../NewMemoButton';
import styles from './Header.css';

const Header = () => {
  return (
    <header className={styles['header']}>
      <h1 className={styles['title']}>
        <span className={styles['logo']} />
        <span>{t('app name')}</span>
        </h1>
      <div className={styles['actions']}>
        <NewMemoButton />
      </div>
    </header>);
};

export default Header;
