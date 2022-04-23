import React from 'react';

import ProfileInfo from '@components/Content/Profile/ProfileInfo/ProfileInfo';
import Posts from '@components/Content/Profile/Posts/Posts';

import styles from './Profile.module.scss';

const Profile = () => {
  return (
    <div className={ styles.container }>
      <ProfileInfo />
      <Posts />
    </div>
  );
};

export default Profile;
