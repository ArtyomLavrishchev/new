import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import Messages from '@components/Content/Dialogs/Messages';
import Layout from '@pages/Router/Layout';
import Profile from '@pages/Profile';
import Dialogs from '@pages/Dialogs';
import Users from '@pages/Users';
import MapComponent from '@pages/MapComponent';

import styles from './AppRouter.module.scss';

type Props = {

}

const AppRouter: FC<Props> = ({}) => {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Profile />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/dialogs" element={<Dialogs />}>
            <Route path=':dialogId' element={<Messages />}/>
          </Route>
          <Route path="/users" element={<Users />}/>
          <Route path="/map" element={<MapComponent />}/>
          <Route path="*" element={<div>Not found</div>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
