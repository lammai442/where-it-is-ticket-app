import { create } from 'zustand';

const useTicketsStore = create((set) => ({
	tickets: [
		{
			orderId: 'cf17cd81',
			events: [
				{
					id: 'ZAsn9ZXFxWTXDE5TCy8Z7aUB',
					name: 'Kajsas kör',
					price: 0,
					where: 'Götaplatsen',
					when: {
						date: '13 December',
						from: '15.00',
						to: '16:00',
					},
					qty: 2,
					ticketsId: '62b9bad0',
				},
			],
		},
		{
			orderId: '205520a0',
			events: [
				{
					id: 'I21pFeU1q3wvInFME34kHWbJ',
					name: 'Greats symfoniker',
					price: 300,
					where: 'Kungliga operan',
					when: {
						date: '15 November',
						from: '18.00',
						to: '20:00',
					},
					qty: 1,
					ticketsId: '5e5e94bb',
				},
			],
		},
		{
			orderId: '2b5ea183',
			events: [
				{
					id: 'I21pFeU1q3wvInFME34kHWbJ',
					name: 'Greats symfoniker',
					price: 300,
					where: 'Kungliga operan',
					when: {
						date: '15 November',
						from: '18.00',
						to: '20:00',
					},
					qty: 1,
					ticketsId: '51805f05',
				},
			],
		},
		{
			orderId: '2b5ea183asd',
			events: [
				{
					id: 'I21pFeU1q3wvInFME34kHWbJ',
					name: 'Greats symfoniker',
					price: 300,
					where: 'Kungliga operan',
					when: {
						date: '15 November',
						from: '18.00',
						to: '20:00',
					},
					qty: 1,
					ticketsId: '51805f05',
				},
				{
					id: 'I21pFeU1q3wvInFME3ads4kHWbJ',
					name: 'Greats symfoniker',
					price: 300,
					where: 'Kungliga operan',
					when: {
						date: '15 November',
						from: '18.00',
						to: '20:00',
					},
					qty: 1,
					ticketsId: '51805f05',
				},
				{
					id: 'I21pFeU1q3wvIadasdnFME34kHWbJ',
					name: 'Greats symfoniker',
					price: 300,
					where: 'Kungliga operan',
					when: {
						date: '15 November',
						from: '18.00',
						to: '20:00',
					},
					qty: 2,
					ticketsId: '51805f05',
				},
				{
					id: 'I21pFeU1adasdasdq3wvInFME34kHWbJ',
					name: 'Greats symfoniker',
					price: 300,
					where: 'Kungliga operan',
					when: {
						date: '15 November',
						from: '18.00',
						to: '20:00',
					},
					qty: 1,
					ticketsId: '51805f05',
				},
				{
					id: 'I21pFeU1adasdasdq3wvInFsdfsfME34kHWbJ',
					name: 'Greats symfoniker',
					price: 300,
					where: 'Kungliga operan',
					when: {
						date: '15 November',
						from: '18.00',
						to: '20:00',
					},
					qty: 1,
					ticketsId: '51805f05',
				},
			],
		},
		{
			orderId: '2b5ea1asdasdas83asd',
			events: [
				{
					id: 'I21pFeU1q3wvInFME34kHWbJ',
					name: 'Greats symfoniker',
					price: 300,
					where: 'Kungliga operan',
					when: {
						date: '15 November',
						from: '18.00',
						to: '20:00',
					},
					qty: 1,
					ticketsId: '51805f05',
				},
				{
					id: 'I21pFeU1q3wvInFME3ads4kHWbJ',
					name: 'Greats symfoniker',
					price: 300,
					where: 'Kungliga operan',
					when: {
						date: '15 November',
						from: '18.00',
						to: '20:00',
					},
					qty: 1,
					ticketsId: '51805f05',
				},
				{
					id: 'I21pFeafasfU1q3wvIadasdnFME34kHWbJ',
					name: 'Greats symfoniker',
					price: 300,
					where: 'Kungliga operan',
					when: {
						date: '15 November',
						from: '18.00',
						to: '20:00',
					},
					qty: 2,
					ticketsId: '51805f05',
				},
				{
					id: 'I21pFeU1adasdasdq3wvasfasInFME34kHWbJ',
					name: 'Greats symfoniker',
					price: 300,
					where: 'Kungliga operan',
					when: {
						date: '15 November',
						from: '18.00',
						to: '20:00',
					},
					qty: 1,
					ticketsId: '51805f05',
				},
				{
					id: 'I21pFeU1adasdasdq3wasdasdvInFsdfsfME34kHWbJ',
					name: 'Greats symfoniker',
					price: 300,
					where: 'Kungliga operan',
					when: {
						date: '15 November',
						from: '18.00',
						to: '20:00',
					},
					qty: 1,
					ticketsId: '51805f05',
				},
			],
		},
	],
	addOrder: (newTickets) =>
		set((state) => ({ tickets: [...state.tickets, newTickets] })),
}));

export default useTicketsStore;
