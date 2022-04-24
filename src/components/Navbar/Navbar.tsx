import React from 'react';

import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div>Profile</div>
      <div>Messages</div>
    </div>
  );
};

export default Navbar;
