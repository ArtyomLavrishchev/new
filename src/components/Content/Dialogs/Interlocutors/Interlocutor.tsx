import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import styles from './Interlocutor.module.scss';

type Props = {
  name: string;
  id: string
}

const Interlocutor: FC<Props> = ({ name, id }) => {
  return (
    <div className={ styles.container }>
      <NavLink
        className={({ isActive }) => cn(styles.link, { [styles.active]: isActive })}
        to={`/dialogs/${id}`}
      >
        {name}
      </NavLink>
    </div>
  );
};

export default Interlocutor;
