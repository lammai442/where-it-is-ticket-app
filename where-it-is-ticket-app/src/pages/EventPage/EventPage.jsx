import './eventPage.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
function EventPage() {
	return (
		<div className='page'>
			<Header text='Event' backBtn={true}></Header>
			<main className='main'></main>
			<Footer />
		</div>
	);
}

export default EventPage;
