import './swiperTickets.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import useTicketsStore from '../../stores/useTicketsStore';

import { Link } from 'react-router-dom';

function SwiperTickets() {
	const { tickets } = useTicketsStore();

	if (tickets.length === 0) {
		return <p>Inga biljetter tillgängliga.</p>;
	}

	return (
		<Swiper
			modules={[Pagination, Scrollbar]}
			spaceBetween={8}
			slidesPerView={1.15}
			centeredSlides={true}
			pagination={{ clickable: true, type: 'bullets' }}>
			{tickets.length > 0 &&
				tickets.map((ticket) => {
					return (
						<SwiperSlide key={ticket.orderId}>
							<Link
								className='link'
								to={`/single-ticket/${ticket.orderId}`}>
								<section className='order__box'>
									<h2 className='order__title'>
										Ordernummer: {ticket.orderId}
									</h2>
									<p>Antal events: {ticket.events.length}</p>
									<section>
										<p>Konserter:</p>
										{ticket.events.map((event) => {
											return (
												<p key={event.id}>
													- {event.name} ({event.qty}{' '}
													{event.qty < 2
														? 'biljett'
														: 'biljetter'}
													)
												</p>
											);
										})}
									</section>
									<p></p>
								</section>
							</Link>
						</SwiperSlide>
					);
				})}
		</Swiper>
	);
}

export default SwiperTickets;
