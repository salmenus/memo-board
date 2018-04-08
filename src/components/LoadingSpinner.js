import React from 'react';
import styles from './LoadingSpinner.css'

const LoadingSpinner = () => (
  <div className={styles['loading-spinner']}>
    <div className={styles['dot-1']} />
    <div className={styles['dot-2']} />
  </div>
);

export default LoadingSpinner;
