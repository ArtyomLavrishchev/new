import React, { FC } from 'react';

import AppRouter from '@pages/Router/AppRouter';
import { StateTypeTest } from './redux/state';

import styles from './App.module.scss';

type Props = {
  state: StateTypeTest;
}

const App: FC<Props> = ({ state }) => {
  return (
    <div className={styles.App}>
      <AppRouter state={state} />
    </div>
  );
};

export default App;
