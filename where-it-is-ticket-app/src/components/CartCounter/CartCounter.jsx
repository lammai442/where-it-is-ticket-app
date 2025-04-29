import './cartCounter.css';
import useCartStore from '../../stores/useCartStore';
import { useEffect, useState } from 'react';

function CartCounter() {
	const { cart } = useCartStore();
	const [cartBalance, setCartBalance] = useState(null);

	// När cart ändras så kommer cartCounter att synas/tas bort
	useEffect(() => {
		// Kontroll så att cart finns och inte är tom
		if (cart && cart.length > 0) {
			let cartTotalQty = 0;
			// Loopa igenom cart för att lägga in det i cartQty
			cart.forEach((event) => {
				cartTotalQty += event.qty;
			});

			setCartBalance(cartTotalQty);
		} else {
			// Om cart är tom igen så kommer cartCounter försvinna
			setCartBalance(null);
		}
	}, [cart]);

	return (
		cartBalance && (
			<>
				<div className='cart-counter__box'>
					<span className='cart-counter__number'>{cartBalance}</span>
				</div>
			</>
		)
	);
}

export default CartCounter;
