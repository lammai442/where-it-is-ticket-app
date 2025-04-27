import { create } from 'zustand';

const useEventsStore = create((set) => ({
	events: [],
	setEvents: (eventsApi) => set({ events: eventsApi }),
}));

// const useEventsStore = create((set) => ({
// 	events: null,
// 	setEvents: (eventsApi) => set({ events: eventsApi }),
// 	fetchEvents: async () => {
// 		const response = await fetch(
// 			'https://santosnr6.github.io/Data/events.json'
// 		);
// 		const data = await response.json();
// 		set({ events: data.events });
// 	},
// }));

export default useEventsStore;
