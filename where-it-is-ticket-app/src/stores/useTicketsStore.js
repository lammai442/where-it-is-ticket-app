import { create } from 'zustand';

const useTicketsStore = create((set) => ({
	tickets: [],
	addOrder: (newTickets) =>
		set((state) => ({ tickets: [...state.tickets, newTickets] })),
}));

export default useTicketsStore;
