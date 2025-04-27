import './eventPage.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useParams } from 'react-router-dom';
import useEventsStore from '../../stores/useEventsStore';
import EventCount from '../../components/EventCount/EventCount';
import { useEffect, useState } from 'react';
import SubmitBtn from '../../components/SubmitBtn/SubmitBtn';

function EventPage() {
	const [event, setEvent] = useState(null);
	const { id } = useParams();
	const { events } = useEventsStore();

	useEffect(() => {
		if (events && events.length > 0) {
			const foundEvent = events.find((e) => e.id === id);
			setEvent(foundEvent);
		}
	}, [events, id]);

	return (
		<div className='page'>
			<Header text='Event' backBtn={true}></Header>
			{event && (
				<main className='main main__flex'>
					<p className='main__paragraph'>
						You are about to score some tickets to
					</p>
					<section className='event__info-box'>
						<h2 className='event__title'>{event.name}</h2>
						<p className='event__subtitle'>
							{event.when.date} {event.when.from} -{' '}
							{event.when.to}
						</p>
						<p className='event__paragraph'>@ {event.where}</p>
					</section>

					<EventCount price={event.price} />
					<SubmitBtn text={'Lägg i varukorgen'} />
				</main>
			)}
			<Footer />
		</div>
	);
}

export default EventPage;
