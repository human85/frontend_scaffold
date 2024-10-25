import { getProfileApi } from '@/api';
import { useAppStore } from '@/store';
import { useRequest } from 'ahooks';
import { useEffect } from 'react';

export const useProfile = () => {
  const { data, runAsync: refreshProfile } = useRequest(getProfileApi, {
    cacheKey: 'userProfile',
  });

  const profile = useAppStore(state => state.profile);
  const setProfile = useAppStore(state => state.setProfile);

  useEffect(() => {
    if (!data) return;
    setProfile(data);
  }, [data, setProfile]);

  return { profile, refreshProfile };
};
