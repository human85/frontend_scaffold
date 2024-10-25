import { StateCreator } from 'zustand';

export type GlobalSlice = {
  openWalletConnect: boolean;
  setOpenWalletConnect: (openWalletConnect: boolean) => void;
};

export const createGlobalSlice: StateCreator<GlobalSlice, [], [], GlobalSlice> = set => ({
  openWalletConnect: false,
  setOpenWalletConnect: openWalletConnect => set({ openWalletConnect }),
});
