import { dialogs } from '@assets/mock-data';
import React from 'react';
import { useParams } from 'react-router-dom';

import styles from './Messages.module.scss';

const Messages = () => {
  const { dialogId } = useParams();
  const messages = dialogs.find((el) => el.id === dialogId)?.messages;
  return (
    <div className={ styles.container }>
      {messages?.map((el, i) => <div key={i}>{el}</div>)}
    </div>
  );
};

export default Messages;
