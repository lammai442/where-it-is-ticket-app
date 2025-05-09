import './swiperTickets.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import useTicketsStore from '../../stores/useTicketsStore';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import EmptyEventsMsg from '../EmptyEventsMsg/EmptyEventsMsg';

function SwiperTickets() {
	const { tickets } = useTicketsStore();
	const [reversedTickets, setReversedTickets] = useState([]);

	useEffect(() => {
		// Vänder på ordningen av arrayen så att senaste lagda order kommer först.
		const reversedTicketsArray = [...tickets].reverse();
		setReversedTickets(reversedTicketsArray);
	}, [tickets]);

	if (reversedTickets.length === 0) {
		return (
			<section className='empty-events__tickets-page-box'>
				<EmptyEventsMsg text='biljetter' />;
			</section>
		);
	}

	return (
		<Swiper spaceBetween={8} slidesPerView={1.15} centeredSlides={true}>
			{reversedTickets.length > 0 &&
				reversedTickets.map((reversedTicket) => {
					return (
						<SwiperSlide key={reversedTicket.orderId}>
							<Link
								className='link'
								to={`/single-ticket/${reversedTicket.orderId}`}>
								<section className='order__box'>
									<section>
										<h2 className='order__title'>
											Ordernummer:
										</h2>
										<p className='order__title-order-id'>
											{reversedTicket.orderId}
										</p>
									</section>
									<p className='order__text'>
										<strong className='order__text'>
											Antal events:{' '}
										</strong>
										{reversedTicket.events.length}
									</p>
									<section>
										<ul className='order__list'>
											<strong className='order__text'>
												Konserter:
											</strong>
											{reversedTicket.events.map(
												(event) => {
													return (
														<li
															key={event.id}
															className='order__list-item'>
															- {event.name} (
															{event.qty}{' '}
															{event.qty < 2
																? 'biljett'
																: 'biljetter'}
															)
														</li>
													);
												}
											)}
										</ul>
									</section>
								</section>
							</Link>
						</SwiperSlide>
					);
				})}
		</Swiper>
	);
}

export default SwiperTickets;
