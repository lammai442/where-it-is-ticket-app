import './eventList.css';
import useEventsStore from '../../stores/useEventsStore';
import EventItem from '../EventItem/EventItem';

function EventList() {
	const { events } = useEventsStore();

	console.log(events);

	return (
		<section className='event-list'>
			{events &&
				events.events.map((event) => {
					return (
						<EventItem
							key={event.id}
							name={event.name}
							price={event.price}
							date={event.when.date}
							from={event.when.from}
							to={event.when.to}
							where={event.where}
						/>
					);
				})}
		</section>
	);
}

export default EventList;
