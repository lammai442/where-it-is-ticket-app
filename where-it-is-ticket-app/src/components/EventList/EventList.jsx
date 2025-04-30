import './eventList.css';
import useEventsStore from '../../stores/useEventsStore';
import EventItem from '../EventItem/EventItem';
import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { useEffect } from 'react';

function EventList() {
	const { events } = useEventsStore();

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
