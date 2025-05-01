import './eventList.css';
import useEventsStore from '../../stores/useEventsStore';
import EventItem from '../EventItem/EventItem';
import { Link } from 'react-router-dom';

function EventList() {
	const { events } = useEventsStore();
	console.log(events);

	return (
		<section className='event-list'>
			{events &&
				events.map((event) => {
					return (
						<Link key={event.id} to={`/event/${event.id}`}>
							<EventItem
								name={event.name}
								price={event.price}
								date={event.when.newDate.day}
								from={event.when.from}
								to={event.when.to}
								where={event.where}
								month={event.when.newDate.month}
							/>
						</Link>
					);
				})}
		</section>
	);
}

export default EventList;
