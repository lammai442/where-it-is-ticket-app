import { create } from 'zustand';

const useTicketsStore = create((set) => ({
	// tickets: [
	// 	{
	// 		orderId: 'cf17cd81',
	// 		events: [
	// 			{
	// 				id: 'ZAsn9ZXFxWTXDE5TCy8Z7aUB',
	// 				name: 'Kajsas kör',
	// 				price: 0,
	// 				where: 'Götaplatsen',
	// 				when: {
	// 					date: '13 December',
	// 					newDate: {
	// 						day: '13',
	// 						month: 'Dec',
	// 					},
	// 					from: '15.00',
	// 					to: '16:00',
	// 				},
	// 				qty: 3,
	// 				seat: ['A1', 'A2', 'A3'],
	// 				ticketsId: '62b9bad0',
	// 			},
	// 		],
	// 	},
	// 	{
	// 		orderId: '205520a0',
	// 		events: [
	// 			{
	// 				id: 'I21pFeU1q3wvInFME34kHWbJ',
	// 				name: 'Greats symfoniker',
	// 				price: 300,
	// 				where: 'Kungliga operan',
	// 				when: {
	// 					date: '15 November',
	// 					newDate: {
	// 						day: '15',
	// 						month: 'Nov',
	// 					},
	// 					from: '18.00',
	// 					to: '20:00',
	// 				},
	// 				qty: 1,
	// 				seat: ['A1'],
	// 				ticketsId: '5e5e94bb',
	// 			},
	// 		],
	// 	},
	// 	{
	// 		orderId: '2b5ea183',
	// 		events: [
	// 			{
	// 				id: 'I21pFeU1q3wvInFME34kHWbJ',
	// 				name: 'Greats symfoniker',
	// 				price: 300,
	// 				where: 'Kungliga operan',
	// 				when: {
	// 					date: '15 November',
	// 					newDate: {
	// 						day: '15',
	// 						month: 'Nov',
	// 					},
	// 					from: '18.00',
	// 					to: '20:00',
	// 				},
	// 				qty: 1,
	// 				seat: ['A2'],
	// 				ticketsId: '51805f05',
	// 			},
	// 		],
	// 	},
	// 	{
	// 		orderId: '2b5ea183asd',
	// 		events: [
	// 			{
	// 				id: 'I21pFeU1q3wvInFME34kHWbJ',
	// 				name: 'Greats symfoniker',
	// 				price: 300,
	// 				where: 'Kungliga operan',
	// 				when: {
	// 					date: '15 November',
	// 					newDate: {
	// 						day: '15',
	// 						month: 'Nov',
	// 					},
	// 					from: '18.00',
	// 					to: '20:00',
	// 				},
	// 				qty: 1,
	// 				ticketsId: '51805f05',
	// 			},
	// 			{
	// 				id: 'ZAsn9ZXFxWTXDE5TCy8Z7aUB',
	// 				name: 'Kajsas kör',
	// 				price: 0,
	// 				where: 'Götaplatsen',
	// 				when: {
	// 					date: '13 December',
	// 					newDate: {
	// 						day: '13',
	// 						month: 'Dec',
	// 					},
	// 					from: '15.00',
	// 					to: '16:00',
	// 				},
	// 				qty: 3,
	// 				seat: ['B11', 'B12', 'B13'],
	// 				ticketsId: '62b9bad0',
	// 			},
	// 			{
	// 				id: 'I21pFeU1q3wvIadasdnFME34kHWbJ',
	// 				name: 'Greats symfoniker',
	// 				price: 300,
	// 				where: 'Kungliga operan',
	// 				when: {
	// 					date: '15 November',
	// 					newDate: {
	// 						day: '15',
	// 						month: 'Nov',
	// 					},
	// 					from: '18.00',
	// 					to: '20:00',
	// 				},
	// 				qty: 2,
	// 				ticketsId: '51805f05',
	// 			},
	// 			{
	// 				id: 'I21pFeU1adasdasdq3wvInFME34kHWbJ',
	// 				name: 'Greats symfoniker',
	// 				price: 300,
	// 				where: 'Kungliga operan',
	// 				when: {
	// 					date: '15 November',
	// 					newDate: {
	// 						day: '15',
	// 						month: 'Nov',
	// 					},
	// 					from: '18.00',
	// 					to: '20:00',
	// 				},
	// 				qty: 1,
	// 				ticketsId: '51805f05',
	// 			},
	// 			{
	// 				id: 'I21pFeU1adasdasdq3wvInFsdfsfME34kHWbJ',
	// 				name: 'Greats symfoniker',
	// 				price: 300,
	// 				where: 'Kungliga operan',
	// 				when: {
	// 					date: '15 November',
	// 					newDate: {
	// 						day: '15',
	// 						month: 'Nov',
	// 					},
	// 					from: '18.00',
	// 					to: '20:00',
	// 				},
	// 				qty: 1,
	// 				ticketsId: '51805f05',
	// 			},
	// 		],
	// 	},
	// 	{
	// 		orderId: '2b5ea1asdasdas83asd',
	// 		events: [
	// 			{
	// 				id: 'I21pFeU1q3wvInFME34kHWbJ',
	// 				name: 'Greats symfoniker',
	// 				price: 300,
	// 				where: 'Kungliga operan',
	// 				when: {
	// 					date: '15 November',
	// 					newDate: {
	// 						day: '15',
	// 						month: 'Nov',
	// 					},
	// 					from: '18.00',
	// 					to: '20:00',
	// 				},
	// 				qty: 1,
	// 				ticketsId: '51805f05',
	// 			},
	// 			{
	// 				id: 'I21pFeU1q3wvInFME3ads4kHWbJ',
	// 				name: 'Pelles trubadur',
	// 				price: 300,
	// 				where: 'Kungliga operan',
	// 				when: {
	// 					date: '15 November',
	// 					newDate: {
	// 						day: '15',
	// 						month: 'Nov',
	// 					},
	// 					from: '18.00',
	// 					to: '20:00',
	// 				},
	// 				qty: 1,
	// 				ticketsId: '51805f05',
	// 			},
	// 			{
	// 				id: 'I21pFeafasfU1q3wvIadasdnFME34kHWbJ',
	// 				name: 'Lasse-Stefanz',
	// 				price: 300,
	// 				where: 'Kungliga operan',
	// 				when: {
	// 					date: '15 November',
	// 					newDate: {
	// 						day: '15',
	// 						month: 'Nov',
	// 					},
	// 					from: '18.00',
	// 					to: '20:00',
	// 				},
	// 				qty: 2,
	// 				ticketsId: '51805f05',
	// 			},
	// 			{
	// 				id: 'I21pFeU1adasdasdq3wvasfasInFME34kHWbJ',
	// 				name: 'Kajsas kör',
	// 				price: 0,
	// 				where: 'Kungliga operan',
	// 				when: {
	// 					date: '15 November',
	// 					newDate: {
	// 						day: '15',
	// 						month: 'Nov',
	// 					},
	// 					from: '18.00',
	// 					to: '20:00',
	// 				},
	// 				qty: 1,
	// 				ticketsId: '51805f05',
	// 			},
	// 			{
	// 				id: 'I21pFeU1adasdasdq3wasdasdvInFsdfsfME34kHWbJ',
	// 				name: 'Klubb Untz',
	// 				price: 300,
	// 				where: 'Kungliga operan',
	// 				when: {
	// 					date: '1 November',
	// 					newDate: {
	// 						day: '1',
	// 						month: 'Nov',
	// 					},
	// 					from: '18.00',
	// 					to: '20:00',
	// 				},
	// 				qty: 1,
	// 				ticketsId: '51805f05',
	// 			},
	// 		],
	// 	},
	// ],
	tickets: [],
	addOrder: (newTickets) =>
		set((state) => ({ tickets: [...state.tickets, newTickets] })),
}));

export default useTicketsStore;
