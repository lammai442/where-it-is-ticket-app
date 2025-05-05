const useRandomSeat = (tickets, qty, id) => {
	let isSeatAvaile = false;
	const seat = [];

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
			newSeat.push(suggestedSeat);
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

		// Leta efter om det
		const matchSeat = foundSeats.some((seat) => newSeat.includes(seat));

		if (matchSeat) {
			console.log('Det finns redan ' + newSeat);
		} else {
			console.log('Ingen matchning och seat kan loggas');

			seat.push(newSeat);
			isSeatAvaile = true;
		}
	}

	console.log(seat);

	return seat;
};

export default useRandomSeat;
