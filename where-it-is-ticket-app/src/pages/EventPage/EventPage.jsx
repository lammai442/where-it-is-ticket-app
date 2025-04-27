import './eventPage.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useParams } from 'react-router-dom';
import useEventsStore from '../../stores/useEventsStore';
function EventPage() {
	const id = useParams();
	console.log(id);

	const { events } = useEventsStore();
	console.log(events);

	return (
		<div className='page'>
			<Header text='Event' backBtn={true}></Header>
			<main className='main'>
				<p>You are about to score some tickets to</p>
				<section>
					<h2></h2>
				</section>
			</main>
			<Footer />
		</div>
	);
}

export default EventPage;
