import React, { FC } from 'react';

import UsersList from '@components/Content/UsersList';

import styles from './Users.module.scss';

type Props = {

}

const Users: FC<Props> = ({}) => {
  return (
    <div className={ styles.container }>
      <UsersList />
    </div>
  );
};

export default Users;
