import './eventCount.css';
import { useEffect, useState } from 'react';

function EventCount({ price, qty, handleQtyChange }) {
	const [totalAmount, setTotalAmount] = useState(price);

	const handleQtyBtn = (e) => {
		const buttonValue = e.target.value;
		let newQty = qty;

		if (buttonValue === '-' && qty > 0) {
			newQty = qty - 1;
		} else if (buttonValue === '+') {
			newQty = qty + 1;
		}

		// Skicka tillbaka newQty för sätta nya värdet
		handleQtyChange(newQty);
	};

	// useEffect för att visa nuvarande kostnad
	useEffect(() => {
		setTotalAmount(price * qty);
	}, [qty]); // Uppdatera totalbelopp när qty förändras

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
