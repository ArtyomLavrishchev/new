import { DialogType, PostType } from 'src/types';

export const state = {
  posts: [
    { id: '1', postMessage: 'First post' },
    { id: '2', postMessage: 'Second post' },
    { id: '3', postMessage: 'Third post' },
  ],
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
};

export type StateTypeTest = {
  posts: PostType[];
  dialogs: DialogType[];
}
