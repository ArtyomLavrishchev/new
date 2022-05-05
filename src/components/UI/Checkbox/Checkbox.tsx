import React, { FC, InputHTMLAttributes } from 'react';

import styles from './Checkbox.module.scss';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
}

const Checkbox: FC<Props> = (props) => {
  return (
    <label className={styles.container}>
      <input type="checkbox" {...props} />
      {props.label}
    </label>
  );
};

export default Checkbox;
