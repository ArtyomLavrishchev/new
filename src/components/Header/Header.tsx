import React from 'react';

import logo from '@assets/images/logos/main-logo.png';

import styles from './Header.module.scss';

const Header = () => {
  return <div className={styles.container}>
    <img className={styles.logo} src={logo} alt="" />
  </div>;
};

export default Header;
