import './cartItem.css';

function CartItem({ title, date, from, to, qty }) {
	return (
		<section className='cart-item__box'>
			<section className='cart-item__top'>
				<h2 className='cart-item__title'>{title}</h2>
				<p className='cart-item__sub-title'>
					{date} kl {from} - {to}
				</p>
			</section>
			<section className='cart-item__bottom'>
				<button className='cart-item__count-btn' value='-'>
					-
				</button>
				<span className='cart-item__number'>{qty}</span>
				<button className='cart-item__count-btn' value='+'>
					+
				</button>
			</section>
		</section>
	);
}

export default CartItem;
