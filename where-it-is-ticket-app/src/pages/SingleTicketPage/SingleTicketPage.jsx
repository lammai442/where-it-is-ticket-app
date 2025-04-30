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

function SingleTicketPage() {
	const { tickets } = useTicketsStore();
	const [events, setEvents] = useState(null);
	const { orderId } = useParams();

	useEffect(() => {
		if (tickets) {
			const findOrder = tickets.find(
				(ticket) => ticket.orderId === orderId
			);
			setEvents(findOrder);
		}
	}, [orderId]);
	console.log(events);

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
					centeredSlides={true}
					// pagination={{
					// 	clickable: true,
					// 	type: 'bullets',
					// }}
				>
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
											<p className='ticket-what-title'>
												{event.name}
											</p>
										</section>
										<section>
											<h2 className='ticket__box-title'>
												WHERE
											</h2>
											<p>{event.where}</p>
										</section>
										<section>
											<section>
												<h2 className='ticket__box-title'>
													WHEN
													<p>{event.when.date}</p>
												</h2>
											</section>
											<section>
												<h2 className='ticket__box-title'>
													FROM
													<p>{event.when.from}</p>
												</h2>
											</section>
											<section>
												<h2 className='ticket__box-title'>
													TO
													<p>{event.when.to}</p>
												</h2>
											</section>
											<section>
												<h2 className='ticket__box-title'>
													INFO
												</h2>
												<p>Section C</p>
											</section>
											<section>{event.ticketsId}</section>
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
