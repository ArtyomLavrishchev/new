import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import Message from './Message/Message';
import { DialogType } from 'src/types';

import styles from './Messages.module.scss';

type Props = {
  dialogs: DialogType[];
}

const Messages: FC<Props> = ({ dialogs }) => {
  const { dialogId } = useParams();
  const messages = dialogs.find(({ id }) => id === dialogId)?.messages;
  return (
    <div className={ styles.container }>
      {messages?.map((message, i) => <Message key={i} message={message} />)}
    </div>
  );
};

export default Messages;
