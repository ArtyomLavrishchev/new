import React, { FC } from 'react';

import { UsersType } from 'src/types/users';
import Avatar from '@components/UI/Avatar';
import Button from '@components/UI/Button';
import { useAppDispatch } from '@hooks/reduxHooks';
import { toggleFollow } from '@reducers/usersReducer';

import styles from './User.module.scss';

const User: FC<UsersType> = ({ id, followed, fullName, location, photoUrl, status }) => {
  const dispatch = useAppDispatch();

  const onChangeFollowed = () => {
    dispatch(toggleFollow(id));
  };

  const btnLabel = followed ? 'Unsubscribe' : 'Subscribe';

  return (
    <div className={ styles.container }>
      <div className={styles.avatar}>
        <Avatar img={photoUrl} size='medium' />
        <Button onClick={onChangeFollowed}>{btnLabel}</Button>
      </div>
      <div className={styles.info}>
        <div>
          <span>{fullName}</span>
          <span>{status}</span>
        </div>
        <div>
          <span>{location.country},</span>
          <span>{location.city}</span>
        </div>
      </div>
    </div>
  );
};

export default User;
