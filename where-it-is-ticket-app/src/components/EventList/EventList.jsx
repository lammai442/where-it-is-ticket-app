import './eventList.css';
import useEventsStore from '../../stores/useEventsStore';
import EventItem from '../EventItem/EventItem';
import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { useEffect } from 'react';

function EventList() {
	const { events } = useEventsStore();
	// const { events, setEvents, fetchEvents } = useEventsStore();

	// useEffect(() => {
	// 	if (!events) {
	// 		// hämta bara om events saknas
	// 		fetchEvents();
	// 	}
	// }, []);

	// if (!events) {
	// 	return <p style={{ color: '#ffffff' }}>Laddar events...</p>;
	// }

	return (
		<section className='event-list'>
			{events &&
				events.map((event) => {
					return (
						<Link key={event.id} to={`/event/${event.id}`}>
							<EventItem
								name={event.name}
								price={event.price}
								date={event.when.date}
								from={event.when.from}
								to={event.when.to}
								where={event.where}
							/>
						</Link>
					);
				})}
		</section>
	);
}

export default EventList;
