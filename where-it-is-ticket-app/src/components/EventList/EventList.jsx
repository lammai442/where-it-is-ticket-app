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
				events.events.map((event) => {
					return (
						<Link to='/event'>
							<EventItem
								key={event.id}
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
