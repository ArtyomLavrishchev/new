import React from 'react';

import NewPostForm from './NewPostForm';
import Post from './Post';

import styles from './Posts.module.scss';

import { posts } from '@assets/mock-data';

const Posts = () => {
  return (
    <div className={ styles.container }>
      <h2>My posts</h2>
      <NewPostForm />
      {posts.map(({ id, postMessage }) => <Post key={id} postMessage={postMessage} />)}
    </div>
  );
};

export default Posts;
