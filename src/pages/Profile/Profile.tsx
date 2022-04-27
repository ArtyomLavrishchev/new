import React, { FC } from 'react';

import ProfileInfo from '@components/Content/Profile/ProfileInfo';
import Posts from '@components/Content/Profile/Posts';

import styles from './Profile.module.scss';

type Props = {

}

const Profile: FC<Props> = ({}) => {
  return (
    <div className={ styles.container }>
      <ProfileInfo />
      <Posts />
    </div>
  );
};

export default Profile;
