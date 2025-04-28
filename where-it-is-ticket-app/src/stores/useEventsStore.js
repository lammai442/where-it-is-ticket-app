import { create } from 'zustand';

const useEventsStore = create((set) => ({
	events: [],
	setEvents: (eventsApi) => set({ events: eventsApi }),
	addQtyToEvent: (qty, id) => {
		set((state) => ({
			events: state.events.map((event) =>
				event.id === id ? { ...event, qty: qty } : event
			),
		}));
	},
}));

export default useEventsStore;
