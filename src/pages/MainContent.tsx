import React from 'react';

import Profile from './Profile';
import Dialogs from './Dialogs';

import styles from './MainContent.module.scss';

const MainContent = () => {
  return (
    <div className={styles.container}>
      {/* <Profile /> */}
      <Dialogs />
    </div>
  );
};

export default MainContent;
