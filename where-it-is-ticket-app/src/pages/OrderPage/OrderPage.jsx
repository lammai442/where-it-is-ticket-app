import './orderPage.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import CartItem from '../../components/CartItem/CartItem';
import { useEffect, useState } from 'react';
import useCartStore from '../../stores/useCartStore';
import SubmitBtn from '../../components/SubmitBtn/SubmitBtn';
function OrderPage() {
	const { cart } = useCartStore();
	const [totalAmount, setTotalAmount] = useState(0);

	useEffect(() => {
		let eventAmount = 0;
		// Loopar genom cart för att summera ihop varje objekts totala summa
		cart.forEach((item) => {
			eventAmount += item.price * item.qty;
		});

		setTotalAmount(eventAmount);
	}, [cart, totalAmount]);
	console.log(cart);

	return (
		<div className='page'>
			<Header text='Order' />
			<main className='main main__order-page'>
				<section className='cart__box'>
					{cart && cart.length > 0 ? (
						cart.map((item) => (
							<CartItem
								key={item.id}
								title={item.name}
								date={item.when.date}
								from={item.when.from}
								to={item.when.to}
								qty={item.qty}
							/>
						))
					) : (
						<p>Här är det tomt</p>
					)}
				</section>
				<section className='summary__box'>
					<h3 className='summary__title'>Totalt värde på order</h3>
					<p className='summary__amount'>{totalAmount} sek</p>
				</section>
				<SubmitBtn text='Skicka order' />
			</main>
			<Footer />
		</div>
	);
}

export default OrderPage;
