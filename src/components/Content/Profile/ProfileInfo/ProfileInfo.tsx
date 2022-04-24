import React from 'react';

import Avatar from '@components/UI/Avatar';

import styles from './ProfileInfo.module.scss';

const ProfileInfo = () => {
  return (
    <div className={ styles.container }>
      <Avatar
        size='large'
        img='https://www.meme-arsenal.com/memes/75e9cd72a7a2f9b4338c25239f9e6e1b.jpg'
      />
      <div>
        <h2>Name</h2>
        <p>Description</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
