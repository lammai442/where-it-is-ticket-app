import './eventsPage.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import EventList from '../../components/EventList/EventList';

function EventsPage() {
	return (
		<div className='page'>
			<Header text={'Events'} />
			<main className='main main__events-page'>
				<EventList />
			</main>
			<Footer />
		</div>
	);
}

export default EventsPage;
