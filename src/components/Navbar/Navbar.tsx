import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link to='/profile'>Profile</Link>
      <Link to='/dialogs'>Dialogs</Link>
    </div>
  );
};

export default Navbar;
