import React, { ChangeEvent, useState } from 'react';

import TextArea from '@components/UI/TextArea';
import Button from '@components/UI/Button';
import { useAppDispatch } from '@hooks/reduxHooks';
import { addMessage } from '@reducers/dialogsReducer';

import styles from './DialogsForm.module.scss';
import { useParams } from 'react-router-dom';

const DialogsForm = () => {
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState('');
  const { dialogId = '' } = useParams();

  const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const buttonClickHandler = () => {
    dispatch(addMessage({ message, dialogId }));
    setMessage('');
  };

  return (
    <div className={ styles.container }>
      <TextArea value={message} onChange={onMessageChange} />
      <Button onClick={buttonClickHandler}>Add message</Button>
    </div>
  );
};

export default DialogsForm;
