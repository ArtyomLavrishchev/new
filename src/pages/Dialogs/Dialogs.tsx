import React from 'react';

import Interlocutor from '@components/Content/Dialogs/Interlocutors';

import styles from './Dialogs.module.scss';
import { dialogs } from '@assets/mock-data';
import { Outlet } from 'react-router-dom';

const Dialogs = () => {
  return (
    <div className={ styles.container }>
      <div className={styles.interlocutors}>
        {dialogs.map((el) => <Interlocutor key={el.id} id={el.id} name={el.author} />)}
      </div>
      <Outlet />
    </div>
  );
};

export default Dialogs;
