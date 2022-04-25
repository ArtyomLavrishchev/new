import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@components/Header';
import Navbar from '@components/Navbar';

import styles from './ContentRouter.module.scss';

const Layout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className={styles.contentBlock}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
