import React, { FC, InputHTMLAttributes } from 'react';

import styles from './Input.module.scss';

type Props = InputHTMLAttributes<HTMLInputElement> & {

}

const Input: FC<Props> = (props) => {
  return <input className={styles.input} {...props}/>;
};

export default Input;
