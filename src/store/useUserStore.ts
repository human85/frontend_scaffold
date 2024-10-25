import { StateCreator } from 'zustand';

export type UserSlice = {
  isNewUser: boolean;
  setIsNewUser: (isNewUser: boolean) => void;

  profile: API.Profile;
  setProfile: (profile: API.Profile) => void;
};

export const createUserSlice: StateCreator<UserSlice, [], [], UserSlice> = set => ({
  isNewUser: true,
  setIsNewUser: isNewUser => set({ isNewUser }),

  profile: {
    id: 0,
    tg_uid: 0,
    username: '',
    slots: 3,
    honor: 0,
    last_farm_time: null,
    last_claim_time: null,
    last_daily_time: null,
    invite_code: '',
    invited_by_tg_uid: null,
    invite_reward: 0,
    createtime: '2024-10-24 00:00:00',
    updatetime: '2024-10-24 00:00:00',
    inviter: null,
    build: null,
    user_badge_relations: [],
  },

  setProfile: profile => set({ profile }),
});
