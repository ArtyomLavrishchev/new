import React from 'react';

import TextArea from '@components/UI/TextArea';

import styles from './NewPostForm.module.scss';
import Button from '@components/UI/Button';

const NewPostForm = () => {
  return (
    <div className={ styles.container }>
      <TextArea />
      <Button>Add post</Button>
    </div>
  );
};

export default NewPostForm;
