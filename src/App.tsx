import React from 'react';

import AppRouter from '@pages/Router/AppRouter';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <AppRouter />
    </div>
  );
}

export default App;
