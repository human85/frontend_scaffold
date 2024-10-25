import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { GlobalSlice, createGlobalSlice } from './useGlobalStore';
import { UserSlice, createUserSlice } from './useUserStore';

export const useAppStore = create<UserSlice & GlobalSlice>()(
  persist(
    (...a) => ({
      ...createUserSlice(...a),
      ...createGlobalSlice(...a),
    }),
    {
      name: 'omniBadge',
      partialize: state => ({ isNewUser: state.isNewUser }),
    }
  )
);
