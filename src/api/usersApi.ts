import axios from 'axios';

const Api = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '3999e522-cb4e-4498-8ef3-a2f773a6c74f',
  },
});

export const usersAPI = {
  async getUsers({ page = 1, count = 10 }: {page: number, count: number}) {
    const users = await Api.get(`users?page=${page}&count=${count}`);
    return users.data;
  },
};
