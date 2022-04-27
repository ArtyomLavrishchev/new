import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostType } from 'src/types';

interface ProfileState {
  data: {
    posts: PostType[];
  };
}

const initialState: ProfileState = {
  data: {
    posts: [
      { id: '1', postMessage: 'First post' },
      { id: '2', postMessage: 'Second post' },
      { id: '3', postMessage: 'Third post' },
    ],
  },
};

export const counterSlice = createSlice({
  name: 'dialogs',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<string>) => {
      state.data.posts.push({ id: `${Date.now()}`, postMessage: action.payload });
    },
  },
});

export const { addPost } = counterSlice.actions;


export default counterSlice.reducer;
