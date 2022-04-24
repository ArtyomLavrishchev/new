import React from 'react';
import Profile from './Profile';

import styles from './MainContent.module.scss';

const MainContent = () => {
  return (
    <div className={styles.container}>
      <Profile />
    </div>
  );
};

export default MainContent;
