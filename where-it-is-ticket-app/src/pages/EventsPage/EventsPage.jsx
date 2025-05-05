import './eventsPage.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import EventList from '../../components/EventList/EventList';
import useEventsStore from '../../stores/useEventsStore';
import { useEffect, useState } from 'react';
function EventsPage() {
	const { events } = useEventsStore();
	const [filteredEvents, setFilteredEvents] = useState([]);

	// UseEffect för att invänta så att
	useEffect(() => {
		setFilteredEvents(events);
	}, [events]);

	const handleInput = (value) => {
		const filteredSearch = events.filter((event) =>
			event.name.toLowerCase().includes(value)
		);
		if (filteredSearch.length > 0) setFilteredEvents(filteredSearch);
		else setFilteredEvents(false);
	};

	const suggestedEvents = [
		'Lasse-Stefanz',
		'Pelle trubadur',
		'Kajsas kör',
		'Klubb Untz',
		'Greats symfoniker',
	];

	return (
		<div className='page'>
			<Header text={'Events'} />
			<main className='main main__events-page'>
				<label>
					<input
						className='search-input'
						type='text'
						placeholder='Sök efter nästa event'
						onChange={(e) =>
							handleInput(e.target.value.toLowerCase())
						}
					/>
				</label>
				{filteredEvents ? (
					<EventList events={filteredEvents} />
				) : (
					<section className='empty-search__box'>
						<p className='empty-search__text'>
							Din sökning hittade inte några events. Men trösta
							dig inte, för vi har konsert till{' '}
							{suggestedEvents[Math.floor(Math.random() * 5)]}
						</p>
					</section>
				)}
			</main>
			<Footer />
		</div>
	);
}

export default EventsPage;
