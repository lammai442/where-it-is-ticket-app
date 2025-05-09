import './cartCounter.css';
import useCartStore from '../../stores/useCartStore';
import { useEffect, useState } from 'react';

function CartCounter() {
	const { cart } = useCartStore();
	const [cartBalance, setCartBalance] = useState(null);

	// När cart ändras kommer cartCounter att synas/tas bort
	useEffect(() => {
		// Kontroll så att cart finns och inte är tom
		if (cart && cart.length > 0) {
			// Reduce räknar ihop för varje item som finns i arrayen och adderar det till variabeln
			const cartTotalCount = cart.reduce(
				(total, item) => total + item.qty,
				0
			);

			setCartBalance(cartTotalCount);
		} else {
			// Om cart är tom igen så kommer cartCounter försvinna
			setCartBalance(null);
		}
	}, [cart]);

	return (
		cartBalance && (
			<div className='cart-counter__box'>
				<span className='cart-counter__number'>{cartBalance}</span>
			</div>
		)
	);
}
export default CartCounter;
