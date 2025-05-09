import './cartItem.css';
import { FaTrashAlt } from 'react-icons/fa';

function CartItem({
	title,
	date,
	from,
	to,
	qty,
	handleQtyChange,
	id,
	handleEmptyCartItem,
}) {
	const handleQtyBtn = (e) => {
		const buttonValue = e.target.value;
		if (buttonValue === '-') {
			// Skicka tillbaka med omräknad qty
			handleQtyChange(qty - 1, id);
		} else if (buttonValue === '+') {
			handleQtyChange(qty + 1, id);
		}
	};

	return (
		<section className='cart-item__box'>
			<button
				onClick={() => handleEmptyCartItem(id)}
				className='cart-item__trash-btn'
				aria-label='Empty cart item button'>
				<FaTrashAlt />
			</button>
			<section className='cart-item__top'>
				<h2 className='cart-item__title'>{title}</h2>
				<p className='cart-item__sub-title'>
					{date} kl {from} - {to}
				</p>
			</section>
			<section className='cart-item__bottom'>
				<button
					onClick={handleQtyBtn}
					className='cart-item__count-btn'
					value='-'>
					-
				</button>
				<span className='cart-item__number'>{qty}</span>
				<button
					onClick={handleQtyBtn}
					className='cart-item__count-btn'
					value='+'>
					+
				</button>
			</section>
		</section>
	);
}

export default CartItem;
