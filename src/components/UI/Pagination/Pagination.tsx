import React, { FC, useState } from 'react';
import cn from 'classnames';

import styles from './Pagination.module.scss';

type Props = {
  itemsCount: number;
  pageSize: number;
  onChange: (page: number) => void;
}

const Pagination: FC<Props> = ({ pageSize, itemsCount, onChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => () => {
    setCurrentPage(page);
    onChange(page);
  };

  const pagesCount = Math.ceil(itemsCount/pageSize);
  const pages = Array(pagesCount).fill('')
      .map((el, i) =>
        <span
          onClick={onPageChange(i + 1)}
          key={i}
          className={cn(styles.page, { [styles.active]: i + 1 === currentPage })}
        >{i + 1}</span>);

  return (
    <div className={ styles.container }>
      {pages}
    </div>
  );
};

export default Pagination;
