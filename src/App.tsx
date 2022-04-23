import React from 'react';

import Header from '@components/Header/Header';
import Navbar from '@components/Navbar/Navbar';
import MainContent from '@pages/MainContent';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.content}>
        <MainContent />
      </div>
    </div>
  );
}

export default App;
