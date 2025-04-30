import './eventPage.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useParams } from 'react-router-dom';
import useEventsStore from '../../stores/useEventsStore';
import EventCount from '../../components/EventCount/EventCount';
import { useEffect, useState } from 'react';
import SubmitBtn from '../../components/SubmitBtn/SubmitBtn';
import useCartStore from '../../stores/useCartStore';
import SeatSelector from '../../components/SeatSelection/SeatSelection';

function EventPage() {
	const [event, setEvent] = useState(null);
	const { id } = useParams();
	const { events, addQtyToEvent } = useEventsStore();
	const { addToCart } = useCartStore();

	// useEffect för att hitta rätt event genom id och rendera på sidan
	useEffect(() => {
		if (events && events.length > 0) {
			const foundEvent = events.find((e) => e.id === id);
			setEvent(foundEvent);
		}
	}, [events, id]);

	// Funktion för att uppdatera qty i globala staten events
	const handleQtyChange = (newQty) => {
		// Uppdatera endast om det finns skillnad på qty
		if (event.qty !== newQty) {
			addQtyToEvent(newQty, id);
			// Uppdatera event så att den renderas om siffran
			setEvent((prevEvent) => ({
				...prevEvent,
				qty: newQty,
			}));
		}
	};

	const handleSubmitBtn = () => {
		addToCart(event);
	};

	return (
		<div className='page'>
			<Header text='Event' backBtn={true} linkTo={'events'}></Header>

			<main className='main main__flex'>
				<p className='main__paragraph'>
					You are about to score some tickets to
				</p>
				{event && (
					<>
						<section className='event__info-box'>
							<h2 className='event__title'>{event.name}</h2>
							<p className='event__subtitle'>
								{event.when.date} {event.when.from} -{' '}
								{event.when.to}
							</p>
							<p className='event__paragraph'>@ {event.where}</p>
						</section>
						<EventCount
							price={event.price}
							qty={event.qty}
							setEvent={setEvent}
							handleQtyChange={handleQtyChange}
						/>

						<SeatSelector />
						<SubmitBtn
							onClick={handleSubmitBtn}
							text={'Lägg i varukorgen'}
						/>
					</>
				)}
			</main>
			<Footer />
		</div>
	);
}

export default EventPage;
