// arenaData.js

const arenaData = [];

const sections = 'ABCDEFGHIJKLM'.split(''); // Sektioner A till M
const seatsPerSection = 800;

sections.forEach((section) => {
	for (let i = 1; i <= seatsPerSection; i++) {
		arenaData.push({
			id: `${section}${i}`, // Unik ID, t.ex. A1, B45
			section: section, // T.ex. 'A'
			seatNumber: i, // T.ex. 1–800
			booked: false, // Om platsen är bokad eller inte
		});
	}
});

export default arenaData;
