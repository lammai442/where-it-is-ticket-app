import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import useTicketsStore from '../../stores/useTicketsStore';
import './singleTicketPage.css';

function SingleTicketPage() {
	const { tickets } = useTicketsStore();
	const { orderId } = useParams();

	if (tickets) {
		const singleOrder = tickets.find(
			(ticket) => ticket.orderId === orderId
		);
		console.log(singleOrder);
	}

	return (
		<div className='page page__tickets'>
			<Header
				text='Biljetter'
				ticketHeader={true}
				backBtn={true}
				linkTo={'tickets'}
			/>
			<main className='main main__order-page'></main>
			<Footer />
		</div>
	);
}

export default SingleTicketPage;
