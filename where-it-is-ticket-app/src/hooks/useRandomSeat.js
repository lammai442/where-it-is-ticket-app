import { v4 as uuidv4 } from 'uuid';

const useRandomSeat = (tickets, qty, id) => {
	let isSeatAvaile = false;
	let seat = null;

	while (!isSeatAvaile) {
		let newSeat = [];

		const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		const randomLetter =
			alphabet[Math.floor(Math.random() * alphabet.length)];

		const maxSeatsPerRow = 50;
		const startNumber =
			Math.floor(Math.random() * (maxSeatsPerRow - qty + 1)) + 1;

		for (let i = 0; i < qty; i++) {
			const suggestedSeat = randomLetter + (startNumber + i);
			const newOrdertId = uuidv4().slice(0, 8);
			const suggestedSeatWithId = {
				seat: suggestedSeat,
				id: newOrdertId,
			};
			newSeat.push(suggestedSeatWithId);
		}

		// Filtrerar alla events i tickets som matchar id
		const foundSeats = [];

		tickets.forEach((ticket) => {
			ticket.events.forEach((event) => {
				if (event.id === id) {
					// Med spread-operatorn så sprids varje seat i ett eget index istället för att hela arrayen läggs in
					foundSeats.push(...event.seat);
				}
			});
		});

		// Leta efter om det nya förslagna platserna redan finns i tickets
		const isNewSeatsInTickets = foundSeats.some((seat) =>
			newSeat.includes(seat.seat)
		);
		// Om matchSeat är false så avslutas loopen och lägger in newSeat i seat som returneras från hooken
		if (!isNewSeatsInTickets) {
			// seat.push(newSeat);
			seat = newSeat;
			isSeatAvaile = true;
		}
	}

	return seat;
};

export default useRandomSeat;
