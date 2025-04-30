import './seatSelection.css';
import { useState } from 'react';

function SeatSelector() {
	// Listan med sektioner och tillgängliga sittplatser i varje sektion
	const arenaSections = [
		{ name: 'Sektion A', seats: ['A1', 'A2', 'A3'] },
		{ name: 'Sektion B', seats: ['B1', 'B2'] },
		{ name: 'Sektion C', seats: ['C1', 'C2', 'C3', 'C4'] },
	];

	// State för vilken sektion som är vald
	const [selectedSection, setSelectedSection] = useState('');
	// State för vilken sittplats som är vald
	const [selectedSeat, setSelectedSeat] = useState('');
	// State för vilka sittplatser som redan är bokade
	const [bookedSeats, setBookedSeats] = useState([]);

	// När användaren väljer en sektion i dropdown-menyn
	const handleSectionChange = (e) => {
		setSelectedSection(e.target.value); // Uppdatera vilken sektion som är vald
		setSelectedSeat(''); // Återställ vald plats när man byter sektion
	};

	// När användaren väljer en sittplats
	const handleSeatSelect = (e) => {
		const seat = e.target.value;
		setSelectedSeat(seat); // Uppdatera vald sittplats

		// Lägg till platsen i listan över bokade platser
		setBookedSeats((prev) => [...prev, seat]);
	};

	// Hitta den sektion som användaren har valt
	const currentSection = arenaSections.find(
		(section) => section.name === selectedSection
	);

	return (
		<div>
			{/* Dropdown för att välja sektion */}
			<label>
				Välj sektion:
				<select value={selectedSection} onChange={handleSectionChange}>
					<option value=''>-- Välj sektion --</option>
					{/* Loopa genom alla sektioner och visa dem som val */}
					{arenaSections.map((section) => (
						<option key={section.name} value={section.name}>
							{section.name}
						</option>
					))}
				</select>
			</label>

			{/* Visa dropdown för att välja sittplats, bara om en sektion är vald */}
			{currentSection && (
				<label>
					Välj sittplats:
					<select value={selectedSeat} onChange={handleSeatSelect}>
						<option value=''>-- Välj plats --</option>
						{/* Loopa genom sittplatser i den valda sektionen */}
						{currentSection.seats.map((seat) => (
							<option
								key={seat}
								value={seat}
								disabled={bookedSeats.includes(seat)} // Inaktivera platsen om den redan är bokad
							>
								{/* Visa "(upptagen)" efter platsnamnet om den är bokad */}
								{seat}{' '}
								{bookedSeats.includes(seat) ? '(upptagen)' : ''}
							</option>
						))}
					</select>
				</label>
			)}

			{/* Visa vilken plats användaren har valt */}
			{selectedSeat && (
				<p>
					Du har valt:{' '}
					<strong>
						{selectedSection} - {selectedSeat}
					</strong>
				</p>
			)}
		</div>
	);
}

export default SeatSelector;
