import React from 'react';

import loader from '@assets/images/loader/loader.svg';

import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={ styles.container }>
      <img className={styles.loader} src={loader} alt="loader" />
    </div>
  );
};

export default Loader;
