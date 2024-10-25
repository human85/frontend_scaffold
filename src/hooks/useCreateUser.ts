import { createUserApi } from '@/api';
import { getStartParam } from '@/lib';
import { useAppStore } from '@/store';
import { useRequest } from 'ahooks';
import { useMemo } from 'react';

export const useCreateUser = () => {
  const setIsNewUser = useAppStore(state => state.setIsNewUser);

  const inviteCode = useMemo(() => {
    const startParam = getStartParam();
    if (!startParam || !startParam.startsWith('code')) return undefined;

    const code = startParam.replace('code_', '');
    return code;
  }, []);

  const { runAsync: createUser, loading: createUserLoading } = useRequest(() => createUserApi(inviteCode), {
    manual: true,
    onSuccess: () => setIsNewUser(false),
  });

  return {
    createUser,
    createUserLoading,
  };
};
