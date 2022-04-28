import React, { ChangeEvent, FC, useCallback, useState } from 'react';

import TextArea from '@components/UI/TextArea';
import Button from '@components/UI/Button';
import { useAppDispatch } from '@hooks/reduxHooks';
import { addPost } from '@reducers/profileReducer';

import styles from './NewPostForm.module.scss';

type Props = {

}

const NewPostForm: FC<Props> = () => {
  const dispatch = useAppDispatch();

  const [postText, setPostText] = useState('');

  const onPostChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setPostText(e.target.value);
  }, []);

  const buttonClickHandler = () => {
    dispatch(addPost(postText));
    setPostText('');
  };
  return (
    <div className={ styles.container }>
      <TextArea onChange={onPostChange} value={postText} />
      <Button onClick={buttonClickHandler}>Add post</Button>
    </div>
  );
};

export default NewPostForm;
