import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DialogType } from 'src/types';

interface DialogsState {
  data: {
    dialogs: DialogType[];
  };
}

const initialState: DialogsState = {
  data: {
    dialogs: [
      {
        id: '1',
        author: 'Artem',
        messages: ['Hello!', 'How are you?', 'My name is Artem.'],
      },
      { id: '2',
        author: 'Alena',
        messages: ['Hello!', 'Where are you from?', 'My name is Alena.'],
      },
      { id: '3',
        author: 'Valeria',
        messages: ['Hi', 'My name is Valeria', 'I\'m from Rostov-on-Don'],
      },
    ],
  },
};

export const dialogsSlice = createSlice({
  name: 'dialogs',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<{dialogId: string, message: string}>) => {
      const { dialogId, message } = action.payload;
      const dialog = state.data.dialogs.find(({ id }) => id === dialogId);
      dialog?.messages.push(message);
    },
  },
});

export const { addMessage } = dialogsSlice.actions;


export default dialogsSlice.reducer;
