import { create } from 'zustand';

const useSingleEventStore = create((set) => ({
	singleEvent: [],
	setSingleEvent: (singleEvent) => set({ singleEvent: singleEvent }),
}));

export default useEventsStore;
