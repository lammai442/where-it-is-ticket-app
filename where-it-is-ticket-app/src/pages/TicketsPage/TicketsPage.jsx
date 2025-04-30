import './ticketsPage.css';
import Footer from '../../components/Footer/Footer';
import SwiperTickets from '../../components/SwiperTickets/SwiperTickets';
import Header from '../../components/Header/Header';

function TicketsPage() {
	return (
		<div className='page page--gradient'>
			<Header text={'Ordrar'} ticketHeader={true}></Header>
			<main className='main'>
				<SwiperTickets />
			</main>
			<Footer />
		</div>
	);
}

export default TicketsPage;
