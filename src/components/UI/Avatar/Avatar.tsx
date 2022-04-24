import React, { FC } from 'react';
import cn from 'classnames';

import styles from './Avatar.module.scss';

type Props = {
  size?: 'small' | 'medium' | 'large';
  img: string;
}

const Avatar: FC<Props> = ({ size = 'small', img }) => {
  return <img src={img} alt="avatar" className={cn(styles.avatar, styles[size])} />;
};

export default Avatar;
