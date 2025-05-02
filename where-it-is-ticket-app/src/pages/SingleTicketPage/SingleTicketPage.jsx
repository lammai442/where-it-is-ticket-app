import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import useTicketsStore from '../../stores/useTicketsStore';
import './singleTicketPage.css';
import { useEffect, useState } from 'react';
import './singleTicketPage.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import Barcode from 'react-barcode';

function SingleTicketPage() {
	const { tickets } = useTicketsStore();
	const [events, setEvents] = useState(null);
	const { orderId } = useParams();

	useEffect(() => {
		// UseEffect i början för att hitta ordern utifrån orderId och sätter eventet
		if (tickets) {
			const findOrder = tickets.find(
				(ticket) => ticket.orderId === orderId
			);
			setEvents(findOrder);
		}
	}, [orderId]);

	return (
		<div className='page page--gradient'>
			<Header
				text='Biljetter'
				ticketHeader={true}
				backBtn={true}
				linkTo={'tickets'}
			/>
			<main className='main main__order-page'>
				<Swiper
					className='swiper__ticket'
					modules={[Pagination, Scrollbar]}
					spaceBetween={8}
					slidesPerView={1.15}
					centeredSlides={true}>
					{events &&
						events.events.length > 0 &&
						events.events.map((event) => {
							return (
								<SwiperSlide key={event.id}>
									<section className='ticket__box'>
										<section className='ticket-what__box'>
											<h2 className='ticket__box-title'>
												WHAT
											</h2>
											<p className='ticket-what__title'>
												{event.name}
											</p>
										</section>
										<section className='ticket-where__box'>
											<h2 className='ticket__box-title'>
												WHERE
											</h2>
											<p className='ticket-where__title'>
												{event.where}
											</p>
										</section>
										<section className='ticket__small-boxes'>
											<section className='ticket__small-box'>
												<h2 className='ticket__box-title'>
													WHEN
												</h2>
												<p className='ticket__small-box-paragraph'>
													{event.when.newDate.day}{' '}
													{event.when.newDate.month}
												</p>
											</section>
											<section className='ticket__small-box ticket__small-box--dotted'>
												<h2 className='ticket__box-title'>
													FROM
												</h2>
												<p className='ticket__small-box-paragraph'>
													{event.when.from}
												</p>
											</section>
											<section className='ticket__small-box'>
												<h2 className='ticket__box-title'>
													TO
												</h2>
												<p className='ticket__small-box-paragraph'>
													{event.when.to}
												</p>
											</section>
										</section>
										<section className='ticket__info-box'>
											<h2 className='ticket__box-title'>
												INFO
											</h2>
											<p>Section C</p>
										</section>
										<section className='ticket__bar-code-box'>
											<Barcode
												value={event.ticketsId}
												width={1}
												height={40}
												background='transparent'
											/>
										</section>
									</section>
								</SwiperSlide>
							);
						})}
				</Swiper>
			</main>
			<Footer />
		</div>
	);
}

export default SingleTicketPage;
