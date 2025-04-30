import useTicketsStore from '../../stores/useTicketsStore';
import './sliderTicket.css';
import { Swiper, SwiperSlide } from 'swiper/react';

function SliderTicket() {
	const { tickets } = useTicketsStore();

	if (tickets.length > 0) console.log(tickets);

	return (
		<Swiper
			// Pixel mellan bilder
			spaceBetween={50}
			slidesPerView={5}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}></Swiper>
	);
}

export default SliderTicket;
