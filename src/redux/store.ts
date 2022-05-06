import { configureStore } from '@reduxjs/toolkit';
import dialogsReducer from './reducers/dialogsReducer';
import profileReducer from './reducers/profileReducer';
import usersReducer from './reducers/usersReducer';

export const store = configureStore({
  reducer: {
    dialogs: dialogsReducer,
    profile: profileReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
