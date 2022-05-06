import React from 'react';

import { useAppSelector } from '@hooks/reduxHooks';
import User from './User/User';

import styles from './UsersList.module.scss';

const UsersList = () => {
  const { users } = useAppSelector((state) => state.users.data);
  return (
    <div className={ styles.container }>
      {users.map((user) => <User key={user.id} {...user} />)}
    </div>
  );
};

export default UsersList;
