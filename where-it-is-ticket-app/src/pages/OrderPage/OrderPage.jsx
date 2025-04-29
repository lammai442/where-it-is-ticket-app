import './orderPage.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import CartItem from '../../components/CartItem/CartItem';
import { useEffect, useState } from 'react';
import useCartStore from '../../stores/useCartStore';
import SubmitBtn from '../../components/SubmitBtn/SubmitBtn';
import { CiCirclePlus } from 'react-icons/ci';
import { Link } from 'react-router-dom';
function OrderPage() {
	const { cart, updateQtyToCart } = useCartStore();
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

	// Funktion för att uppdatera qty i globala staten events
	const handleQtyChange = (newQty, id) => {
		console.log('handlyQtyChange');
		console.log(newQty + id);

		const match = cart.find((event) => event.id === id);
		console.log(match);

		if (match) {
			// Uppdatera endast om det finns skillnad på qty
			if (match.qty !== newQty) {
				updateQtyToCart(newQty, id);
			}
		}
	};

	return (
		<div className='page'>
			<Header text='Order' />
			<main className='main main__order-page'>
				<section className='cart__box'>
					{cart && cart.length > 0 ? (
						cart.map((item) => (
							<CartItem
								key={item.id}
								id={item.id}
								title={item.name}
								date={item.when.date}
								from={item.when.from}
								to={item.when.to}
								qty={item.qty}
								handleQtyChange={handleQtyChange}
							/>
						))
					) : (
						<section className='cart__empty-box'>
							<p className='cart__empty-msg'>
								Här ekar det tomt på events.
							</p>
							<p className='cart__empty-msg'>
								Ta mig till min nästa upplevelse!
							</p>
							<Link className='link__order-page' to='/events'>
								<button className='cart__addEventBtn'>
									<CiCirclePlus />
								</button>
							</Link>
						</section>
					)}
				</section>
				<section className='summary__box'>
					{cart && cart.length > 0 ? (
						<>
							<h3 className='summary__title'>
								Totalt värde på order
							</h3>
							<p className='summary__amount'>{totalAmount} sek</p>
							<SubmitBtn text='Skicka order' />
						</>
					) : null}
				</section>
			</main>
			<Footer />
		</div>
	);
}

export default OrderPage;
