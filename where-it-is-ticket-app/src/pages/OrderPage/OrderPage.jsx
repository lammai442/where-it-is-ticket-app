import './orderPage.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import CartItem from '../../components/CartItem/CartItem';
import { useEffect, useState } from 'react';
import useCartStore from '../../stores/useCartStore';
import SubmitBtn from '../../components/SubmitBtn/SubmitBtn';
import useTicketsStore from '../../stores/useTicketsStore';
import { v4 as uuidv4 } from 'uuid';
import { FaTrashAlt } from 'react-icons/fa';
import ShowMsg from '../../components/ShowMsg/ShowMsg';
import useRandomSeat from '../../hooks/useRandomSeat';
import EmptyEventsMsg from '../../components/EmptyEventsMsg/EmptyEventsMsg';
import useWiggleStore from '../../stores/useWiggleStore';
function OrderPage() {
	const { cart, updateQtyToCart, emptyCart, removeFromCart } = useCartStore();
	const { tickets } = useTicketsStore();
	const { addOrder } = useTicketsStore();
	const { actionWiggle } = useWiggleStore();
	const [totalAmount, setTotalAmount] = useState(0);
	const [showMsg, setShowMsg] = useState(false);

	useEffect(() => {
		let eventAmount = 0;
		// Loopar genom cart för att summera ihop varje objekts totala summa
		cart.forEach((item) => {
			eventAmount += item.price * item.qty;
		});
		setTotalAmount(eventAmount);
	}, [cart, totalAmount]);

	// Funktion för att uppdatera qty i globala staten events
	const handleQtyChange = (newQty, id) => {
		const match = cart.find((event) => event.id === id);

		if (match) {
			// Uppdatera endast om det finns skillnad på qty
			if (match.qty !== newQty) {
				updateQtyToCart(newQty, id);
			}
		}
	};

	const handleSendOrder = () => {
		// Skapar sittplatser till varje event
		const cartWithSeat = cart.map((item) => {
			const seat = useRandomSeat(tickets, item.qty, item.id);

			const newItem = { ...item, seat: seat };
			return newItem;
		});

		const newOrdertId = uuidv4().slice(0, 8);

		const cartWithId = cartWithSeat.map((event) => {
			// Skapar en ny unik 8 siffrig id för varje ticket
			const newTicketsId = uuidv4().slice(0, 8);
			return {
				...event,
				ticketsId: newTicketsId,
			};
		});

		const ticket = {
			orderId: newOrdertId,
			events: cartWithId,
		};
		setShowMsg({
			type: 'success',
			text: 'Nice, din order är beställd!',
		});

		addOrder(ticket);
		actionWiggle(true);
		setTimeout(() => {
			emptyCart();
		}, 2000);
	};

	const handleEmptyCartItem = (id) => {
		const cartRemovedItem = cart.filter((item) => item.id !== id);
		removeFromCart(cartRemovedItem);
	};

	return (
		<div className='page'>
			<Header text='Order' />
			<main className='main main__order-page'>
				{cart && cart.length > 0 && (
					<>
						<section className='cart__box'>
							<section className='cart__item-box'>
								{cart.map((item) => (
									<CartItem
										key={item.id}
										id={item.id}
										title={item.name}
										date={item.when.date}
										from={item.when.from}
										to={item.when.to}
										qty={item.qty}
										handleQtyChange={handleQtyChange}
										handleEmptyCartItem={
											handleEmptyCartItem
										}
									/>
								))}
							</section>
						</section>

						<section className='summary__box'>
							<h3 className='summary__title'>
								Totalt värde på order
							</h3>
							<section
								className='summary__trash-box'
								onClick={emptyCart}>
								<FaTrashAlt className='summary__trash' />
								<p className='summary__trash-text'>Töm order</p>
							</section>
							<p className='summary__amount'>{totalAmount} sek</p>
							<SubmitBtn
								onClick={handleSendOrder}
								text='Skicka order'
							/>
						</section>
					</>
				)}
				{cart.length === 0 && (
					<section className='empty-events__order-page-box'>
						<EmptyEventsMsg text='events' />
					</section>
				)}
			</main>
			{showMsg && (
				<ShowMsg
					text={showMsg.text}
					type={showMsg.type}
					message={showMsg}
					forceEmptyCart={true}
				/>
			)}
			<Footer />
		</div>
	);
}

export default OrderPage;
