import { create } from 'zustand';

const useEventsStore = create((set) => ({
	events: [],
	setEvents: (eventsApi) => set({ events: eventsApi }),
}));

export default useEventsStore;
