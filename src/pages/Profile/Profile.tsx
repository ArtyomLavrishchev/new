import React, { FC } from 'react';

import ProfileInfo from '@components/Content/Profile/ProfileInfo';
import Posts from '@components/Content/Profile/Posts';
import { PostType } from 'src/types';

import styles from './Profile.module.scss';

type Props = {
  posts: PostType[];
}

const Profile: FC<Props> = ({ posts }) => {
  return (
    <div className={ styles.container }>
      <ProfileInfo />
      <Posts posts={posts}/>
    </div>
  );
};

export default Profile;
