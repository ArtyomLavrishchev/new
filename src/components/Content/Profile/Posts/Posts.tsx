import React from 'react';
import NewPostForm from './NewPostForm/NewPostForm';
import Post from './Post/Post';

import styles from './Posts.module.scss';

const Posts = () => {
  return (
    <div className={ styles.container }>
      My posts
      <NewPostForm />
      {Array(3).fill('post').map((el, i) => <Post key={i} />)}
    </div>
  );
};

export default Posts;
