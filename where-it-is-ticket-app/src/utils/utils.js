const shortenMonthDate = (date) => {
	const dateNumber = date.replace(/\D/g, '');
	const lettersOnly = date.replace(/[^a-zA-ZåäöÅÄÖ]/g, '').slice(0, 3);
	const capitalizedMonth =
		lettersOnly.charAt(0).toUpperCase() + lettersOnly.slice(1);
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

export default shortenMonthDate;
