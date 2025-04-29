import { create } from 'zustand';

// Initierar events som kommer finnas tillgänglig i appen
const useEventsStore = create((set) => ({
	events: [],
	setEvents: (eventsApi) => set({ events: eventsApi }),
	addQtyToEvent: (qty, id) => {
		set((state) => {
			// Lägger till qty till eventet så att den visar senaste qty som man har lagt i eventPage
			return {
				events: state.events.map((event) =>
					event.id === id ? { ...event, qty: qty } : event
				),
			};
		});
	},
}));

export default useEventsStore;
