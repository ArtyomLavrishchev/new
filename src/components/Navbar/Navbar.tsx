import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <NavLink
        className={({ isActive }) => cn(styles.link, { [styles.active]: isActive })}
        to='/profile'
      >
        Profile
      </NavLink>
      <NavLink
        className={({ isActive }) => cn(styles.link, { [styles.active]: isActive })}
        to='/dialogs'
      >
        Dialogs
      </NavLink>
      <NavLink
        className={({ isActive }) => cn(styles.link, { [styles.active]: isActive })}
        to='/users'
      >
        Users
      </NavLink>
      <NavLink
        className={({ isActive }) => cn(styles.link, { [styles.active]: isActive })}
        to='/map'
      >
        Map
      </NavLink>
    </div>
  );
};

export default Navbar;
