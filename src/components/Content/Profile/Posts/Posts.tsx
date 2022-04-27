import React, { FC } from 'react';

import Post from './Post/Post';
import NewPostForm from './NewPostForm';
import { useAppSelector } from '@hooks/reduxHooks';


import styles from './Posts.module.scss';

type Props = {

}

const Posts: FC<Props> = ({}) => {
  const { posts } = useAppSelector((state) => state.profile.data);

  return (
    <div className={ styles.container }>
      <h2>My posts</h2>
      <NewPostForm />
      {posts.map(({ id, postMessage }) => <Post key={id} postMessage={postMessage} />)}
    </div>
  );
};

export default Posts;
