import './ticketsPage.css';
import Footer from '../../components/Footer/Footer';
import SwiperTickets from '../../components/SwiperTickets/SwiperTickets';
import Header from '../../components/Header/Header';

function TicketsPage() {
	return (
		<div className='page page__gradient'>
			<Header text={'Biljetter'} ticketHeader={true}></Header>
			<main className='main main__tickets-page'>
				<SwiperTickets />
			</main>
			<Footer />
		</div>
	);
}

export default TicketsPage;
