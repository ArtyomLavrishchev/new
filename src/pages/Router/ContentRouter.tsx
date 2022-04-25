import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Dialogs from '@pages/Dialogs';
import Profile from '@pages/Profile';

import styles from './ContentRouter.module.scss';
import Layout from '@pages/Router/Layout';

const ContentRouter = () => {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Profile />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/dialogs" element={<Dialogs />}/>
          <Route path="*" element={<div>Not found</div>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default ContentRouter;
