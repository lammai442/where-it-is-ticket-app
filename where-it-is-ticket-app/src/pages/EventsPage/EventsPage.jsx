import './eventsPage.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import EventList from '../../components/EventList/EventList';
import useEventsStore from '../../stores/useEventsStore';
import { useEffect, useState } from 'react';
import { suggestedEvents } from '../../data/data.js';
function EventsPage() {
	const { events } = useEventsStore();
	const [filteredEvents, setFilteredEvents] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	// UseEffect för att invänta så att events har hunnits ladda från Api
	useEffect(() => {
		setFilteredEvents(events);
	}, [events]);

	// När användaren lägger skriver i inputfältet eller får förslag på event
	const handleInput = (value) => {
		setSearchValue(value);
		// Filtrerar och sparar endast de som matchar med sökorden
		const filteredSearch = events.filter((event) =>
			event.name.toLowerCase().includes(value.toLowerCase())
		);

		if (filteredSearch.length > 0) setFilteredEvents(filteredSearch);
		else setFilteredEvents(false);
	};

	return (
		<div className='page'>
			<Header text={'Events'} />
			<main className='main main__events-page'>
				<label className='search-input__box'>
					<input
						className='search-input'
						type='text'
						name='searchInput'
						placeholder='Sök efter nästa event'
						onChange={(e) => handleInput(e.target.value)}
						value={searchValue}
					/>
				</label>
				{filteredEvents ? (
					<EventList events={filteredEvents} />
				) : (
					<section className='empty-search__box'>
						<p className='empty-search__text'>
							Din sökning hittade inte några events.
						</p>
						<p className='empty-search__text empty-search__text--margin'>
							Men trösta dig inte, kanske vill du uppleva en
							hejdundrans konsert med
						</p>
						<p
							className='empty-search__text-suggestion'
							onClick={(e) => {
								// Tar bort de sista 21 tecken i nedanstående
								handleInput(e.target.textContent.slice(0, -21));
							}}>
							{suggestedEvents[Math.floor(Math.random() * 5)]}?{' '}
							<br /> Yes, visa mig det!
						</p>
					</section>
				)}
			</main>
			<Footer />
		</div>
	);
}

export default EventsPage;
