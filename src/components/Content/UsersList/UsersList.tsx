import React, { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import { fetchUsers } from '@reducers/usersReducer';
import User from './User/User';
import Pagination from '@components/UI/Pagination';

import styles from './UsersList.module.scss';

const UsersList = () => {
  const dispatch = useAppDispatch();
  const { users, totalCount } = useAppSelector((state) => state.users.data);
  const [pageSize, setPageSize] = useState(10);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const promise = dispatch(fetchUsers({ page: currentPage, count: pageSize }));
    return () => {
      promise.abort();
    };
  }, [currentPage, dispatch, pageSize, totalCount]);

  return (
    <div className={ styles.container }>
      <Pagination itemsCount={totalCount} pageSize={pageSize} onChange={setCurrentPage} />
      {users.map((user) => <User key={user.id} {...user} />)}
    </div>
  );
};

export default UsersList;
