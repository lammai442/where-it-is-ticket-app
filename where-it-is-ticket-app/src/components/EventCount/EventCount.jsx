import './eventCount.css';
import { useState } from 'react';

function EventCount({ price, qty, handleQtyChange }) {
	// Sätter totalAmount från början genom att kolla nuvarande qty för event * price
	const [totalAmount, setTotalAmount] = useState(price * qty);

	const handleQtyBtn = (e) => {
		const buttonValue = e.target.value;
		if (buttonValue === '-' && qty > 0) {
			// Skicka tillbaka med omräknad qty
			handleQtyChange(qty - 1);
			// Ändrar totalAmount med nytt värde
			setTotalAmount(price * (qty - 1));
		} else if (buttonValue === '+') {
			handleQtyChange(qty + 1);
			setTotalAmount(price * (qty + 1));
		}
	};

	return (
		<section className='event-count__box'>
			<section className='event-count__top'>
				<p className='event-count__price'>{totalAmount} sek</p>
			</section>
			<section className='event-count__bottom'>
				<button
					onClick={handleQtyBtn}
					className='event-count__count-btn'
					value='-'>
					-
				</button>
				<span className='event-count__number'>{qty}</span>
				<button
					onClick={handleQtyBtn}
					className='event-count__count-btn'
					value='+'>
					+
				</button>
			</section>
		</section>
	);
}

export default EventCount;
