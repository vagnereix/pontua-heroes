import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route';
import axios from 'axios';
import { Session, getServerSession } from 'next-auth';

export const api = axios.create({
  baseURL: process.env.APP_BASE_URL,
});

api.interceptors.request.use(async (config) => {
  const user = (await getServerSession(nextAuthOptions)) as Session['user'];
  config.headers['Authorization'] = `Bearer ${user?.token}`;

  return config;
});

export const marvelApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

marvelApi.interceptors.request.use(async (config) => {
  config.params = {
    ...config.params,
    apikey: process.env.NEXT_PUBLIC_API_KEY,
    ts: process.env.NEXT_PUBLIC_TIME_STAMP,
    hash: process.env.NEXT_PUBLIC_HASH,
    limit: config.params?.limit ? config.params.limit : 10,
    offset: config.params?.offset ? config.params.offset : 0,
  };

  return config;
});
