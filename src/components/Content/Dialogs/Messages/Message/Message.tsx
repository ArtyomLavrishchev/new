import React, { FC } from 'react';

import { MessageType } from 'src/types';

import styles from './Message.module.scss';

type Props = {
  message: MessageType;
}

const Message: FC<Props> = ({ message }) => {
  return <div className={styles.container}>{message}</div>;
};

export default Message;

