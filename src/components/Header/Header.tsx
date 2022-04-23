import React from 'react';

import logo from '@assets/images/logos/main-logo.png';

import styles from './Header.module.scss';

const Header = () => {
  return <>
    <img className={styles.logo} src={logo} alt="" />
  </>;
};

export default Header;
