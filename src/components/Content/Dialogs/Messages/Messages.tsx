import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import Message from './Message/Message';
import { useAppSelector } from '../../../../hooks/reduxHooks';

import styles from './Messages.module.scss';

type Props = {

}

const Messages: FC<Props> = ({}) => {
  const { dialogId } = useParams();
  const { dialogs } = useAppSelector((state) => state.dialogs.data);
  const messages = dialogs.find(({ id }) => id === dialogId)?.messages;
  return (
    <div className={ styles.container }>
      {messages?.map((message, i) => <Message key={i} message={message} />)}
    </div>
  );
};

export default Messages;
