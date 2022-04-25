import React from 'react';

import ContentRouter from '@pages/Router/ContentRouter';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <ContentRouter />
    </div>
  );
}

export default App;
