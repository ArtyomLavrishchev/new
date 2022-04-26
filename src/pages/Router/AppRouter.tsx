import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import Messages from '@components/Content/Dialogs/Messages';
import Layout from '@pages/Router/Layout';
import Profile from '@pages/Profile';
import Dialogs from '@pages/Dialogs';
import { StateTypeTest } from 'src/redux/state';

import styles from './AppRouter.module.scss';

type Props = {
  state: StateTypeTest;
}

const AppRouter: FC<Props> = ({ state }) => {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Profile posts={state.posts} />}/>
          <Route path="/profile" element={<Profile posts={state.posts} />}/>
          <Route path="/dialogs" element={<Dialogs dialogs={state.dialogs} />}>
            <Route path=':dialogId' element={<Messages dialogs={state.dialogs} />}/>
          </Route>
          <Route path="*" element={<div>Not found</div>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
