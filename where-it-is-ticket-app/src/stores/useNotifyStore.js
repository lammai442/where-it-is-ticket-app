import { create } from 'zustand';

const useNotifyStore = create((set) => ({
	notify: false,
	updateNotify: (value) => set({ notify: value }),
}));

export default useNotifyStore;
