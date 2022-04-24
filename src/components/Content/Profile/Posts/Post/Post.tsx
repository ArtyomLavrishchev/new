import React, { FC } from 'react';

import Avatar from '@components/UI/Avatar';

import styles from './Post.module.scss';

type Props = {
  postMessage: string;
}

const Post: FC<Props> = ({ postMessage }) => {
  return (
    <div className={ styles.container }>
      <Avatar
        size='small'
        img='https://www.meme-arsenal.com/memes/75e9cd72a7a2f9b4338c25239f9e6e1b.jpg'
      />
      {postMessage}
    </div>
  );
};

export default Post;
