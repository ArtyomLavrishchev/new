import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Interlocutor from '@components/Content/Dialogs/Interlocutors';
import DialogsForm from '@components/Content/Dialogs/DialogsForm';

import styles from './Dialogs.module.scss';
import { useAppSelector } from '@hooks/reduxHooks';

type Props = {

}

const Dialogs: FC<Props> = ({}) => {
  const { dialogs } = useAppSelector((state) => state.dialogs.data);

  return (
    <div className={ styles.container }>
      <div className={styles.dialogs}>
        <div className={styles.interlocutors}>
          {dialogs.map(({ id, author }) =>
            <Interlocutor key={id} id={id} name={author} />,
          )}
        </div>
        <Outlet />
      </div>
      <DialogsForm />
    </div>
  );
};

export default Dialogs;
