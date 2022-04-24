import React from 'react';

import Header from '@components/Header';
import Navbar from '@components/Navbar';
import MainContent from '@pages/MainContent';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Navbar />
      <MainContent />
    </div>
  );
}

export default App;
