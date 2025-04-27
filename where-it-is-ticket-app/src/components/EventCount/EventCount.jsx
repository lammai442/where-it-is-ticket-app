import './eventCount.css';
import { useState } from 'react';
function EventCount({ price }) {
	const [qty, setQty] = useState(0);

	return (
		<section className='event-count__box'>
			<section className='event-count__top'>
				<p className='event-count__price'>{price} sek</p>
			</section>
			<section className='event-count__bottom'>
				<button className='event-count__count-btn'>-</button>
				<span className='event-count__number'>{qty}</span>
				<button className='event-count__count-btn'>+</button>
			</section>
		</section>
	);
}

export default EventCount;
