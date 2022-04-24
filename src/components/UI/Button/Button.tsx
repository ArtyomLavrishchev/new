import React, { ButtonHTMLAttributes, FC } from 'react';

import styles from './Button.module.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {

}

const Button: FC<Props> = (props) => {
  return <button className={styles.button} {...props}>{props.children}</button>;
};

export default Button;
