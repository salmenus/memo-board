import React from 'react';
import Memos from '../Memos';
import styles from './Main.css';

const Main = () => (
  <main className={styles['main']}>
    <Memos />
  </main>
);

export default Main;
