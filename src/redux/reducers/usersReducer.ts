import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { usersAPI } from '../../api/usersApi';
import { UsersType } from '../../types/users';

interface ProfileState {
  data: {
    users: UsersType[];
    totalCount: number;
    isLoading: boolean;
    error: string;
  };
}

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (options: {page: number, count: number}, { rejectWithValue }) => {
      try {
        const response = await usersAPI.getUsers(options);
        if (response.error) {
          throw new Error(response.error);
        }
        return response;
      } catch (err) {
        let message = 'Server error';

        if (err instanceof Error) {
          message = err.message;
        }
        return rejectWithValue(message);
      }
    },
);


const initialState: ProfileState = {
  data: {
    users: [],
    totalCount: 0,
    isLoading: true,
    error: '',
  },
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    toggleFollow: (state, action: PayloadAction<number>) => {
      const user = state.data.users.find((u) => u.id === action.payload);
      if (user) {
        user.followed = !user?.followed;
      }
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(fetchUsers.pending, (state) => {
          state.data.isLoading = true;
          state.data.error = '';
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
          state.data.users = action.payload.items;
          state.data.totalCount = action.payload.totalCount;
          state.data.isLoading = false;
          state.data.error = '';
        })
        .addCase(fetchUsers.rejected, (state, action) => {
          state.data.error = action.error.message || '';
          state.data.isLoading = false;
        });
  },
});

export const { toggleFollow } = usersSlice.actions;

export default usersSlice.reducer;
