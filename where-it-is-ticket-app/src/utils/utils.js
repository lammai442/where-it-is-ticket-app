const shortenMonthDate = (date) => {
	const dateNumber = date.replace(/\D/g, '');
	const lettersOnly = date.replace(/[^a-zA-ZåäöÅÄÖ]/g, '').slice(0, 3);
	const capitalizedMonth = lettersOnly.toUpperCase();
	const newDate = {
		day: dateNumber,
		month: capitalizedMonth,
	};
	return newDate;
};

export const randomLetter = () => {
	const letterIndex = Math.floor(Math.random() * 26) + 65;

	const randomLetter = String.fromCharCode(letterIndex).toUpperCase();

	return randomLetter;
};

export const restoreQty = (id, events, setEvents) => {
	const defaultQtyEvents = events.map((event) => {
		if (event.id === id) {
			return {
				...event,
				qty: 1,
			};
		}
		// Lämnar övriga events som de är.
		return event;
	});

	setEvents(defaultQtyEvents);
};

export default shortenMonthDate;
