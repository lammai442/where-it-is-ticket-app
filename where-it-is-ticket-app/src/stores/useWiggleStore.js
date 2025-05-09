import { create } from 'zustand';

const useWiggleStore = create((set) => ({
	wiggle: false,
	actionWiggle: (value) => set({ wiggle: value }),
}));

export default useWiggleStore;
