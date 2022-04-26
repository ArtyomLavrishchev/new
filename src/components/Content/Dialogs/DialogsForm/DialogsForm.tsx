import React from 'react';

import TextArea from '@components/UI/TextArea';
import Button from '@components/UI/Button';

import styles from './DialogsForm.module.scss';

const DialogsForm = () => {
  const buttonClickHandler = () => {
    console.log('click');
  };

  return (
    <div className={ styles.container }>
      <TextArea />
      <Button onClick={buttonClickHandler}>Add message</Button>
    </div>
  );
};

export default DialogsForm;
