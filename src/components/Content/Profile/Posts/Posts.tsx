import React, { FC } from 'react';

import NewPostForm from './NewPostForm';

import Post from './Post/Post';

import styles from './Posts.module.scss';

import { PostType } from 'src/types';

type Props = {
  posts: PostType[];
}

const Posts: FC<Props> = ({ posts }) => {
  return (
    <div className={ styles.container }>
      <h2>My posts</h2>
      <NewPostForm />
      {posts.map(({ id, postMessage }) => <Post key={id} postMessage={postMessage} />)}
    </div>
  );
};

export default Posts;
