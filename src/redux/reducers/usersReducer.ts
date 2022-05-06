import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UsersType } from 'src/types/users';

interface ProfileState {
  data: {
    users: UsersType[];
  };
}

const initialState: ProfileState = {
  data: {
    users: [
      {
        id: '1',
        followed: true,
        fullName: 'Artem',
        location: {
          city: 'Rostov',
          country: 'Russia',
        },
        // eslint-disable-next-line max-len
        photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvoBKjCWkoNA8jziEddSrMitmzahIh3MN2Vg&usqp=CAU',
        status: 'status',
      },
      {
        id: '2',
        followed: false,
        fullName: 'Alena',
        location: {
          city: 'Ufa',
          country: 'Russia',
        },
        // eslint-disable-next-line max-len
        photoUrl: 'https://klike.net/uploads/posts/2019-06/1560329641_2.jpg',
        status: 'status',
      },
      {
        id: '3',
        followed: false,
        fullName: 'Valeria',
        location: {
          city: 'Rostov',
          country: 'Russia',
        },
        // eslint-disable-next-line max-len
        photoUrl: 'https://cdnimg.rg.ru/img/content/157/19/21/RIAN_3266001.HR.ru_d_850.jpg',
        status: 'status',
      },
    ],
  },
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    toggleFollow: (state, action: PayloadAction<string>) => {
      const user = state.data.users.find((u) => u.id === action.payload);
      if (user) {
        user.followed = !user?.followed;
      }
    },
    setUsers: (state, action: PayloadAction<UsersType[]>) => {
      state.data.users = action.payload;
    },
  },
});

export const { toggleFollow, setUsers } = usersSlice.actions;


export default usersSlice.reducer;
