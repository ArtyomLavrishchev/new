import React, { FC, memo, TextareaHTMLAttributes } from 'react';

import styles from './TextArea.module.scss';

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {}

const TextArea: FC<Props> = (props) => {
  return <textarea className={styles.textarea} {...props} />;
};

export default memo(TextArea);
