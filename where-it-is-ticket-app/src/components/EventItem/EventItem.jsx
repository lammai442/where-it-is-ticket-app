import './eventItem.css';

function EventItem({ name, price, date, from, to, where }) {
	return (
		<section className='event__box'>
			<section className='event__left-box'>
				<p className='event__date'>{date}</p>
			</section>
			<section className='event__right-box'>
				<section className='event__info-left'>
					<h2 className='event__info-title'>{name}</h2>
					<p className='event__info-place'>{where}</p>
					<section className='event__right-info-bottom'>
						<p className='event__info-time'>
							{from} - {to}
						</p>
						<p className='event__info-price'>{price} sek</p>
					</section>
				</section>
			</section>
		</section>
	);
}

export default EventItem;
