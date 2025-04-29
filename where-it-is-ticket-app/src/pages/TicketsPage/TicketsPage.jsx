import './ticketsPage.css';
import Footer from '../../components/Footer/Footer';
import useTicketsStore from '../../stores/useTicketsStore';
function TicketsPage() {
	const { tickets } = useTicketsStore();

	if (tickets) {
		console.log(tickets);
	}
	return (
		<div className='page'>
			<main className='main'>
				<section className='hero'></section>
			</main>
			<Footer />
		</div>
	);
}

export default TicketsPage;
