import { request } from '@/lib';
import twa from '@twa-dev/sdk';

export const createUserApi = (code?: string) => {
  return request.post('/user/create', {
    code,
  });
};

export const getProfileApi = () => {
  const id = twa.initDataUnsafe.user?.id;

  return request.get<unknown, API.Profile>(`/user/profile?tg_uid=${id}`);
};
