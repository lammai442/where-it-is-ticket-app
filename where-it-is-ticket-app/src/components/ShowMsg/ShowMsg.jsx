import './showMsg.css';
import { useState, useEffect } from 'react';
import Logo from '../../assets/logo/Logo.svg';
import { AnimatePresence, motion } from 'framer-motion';
import useCartStore from '../../stores/useCartStore';

function ShowMsg({ type, text, message, forceEmptyCart }) {
	const [visible, setVisible] = useState(null);
	const { emptyCart } = useCartStore();
	useEffect(() => {
		if (message) {
			setVisible(true);

			const timeout = setTimeout(() => {
				setVisible(false);
			}, 2000);

			// Rensa timeout om komponenten tas bort
			return () => clearTimeout(timeout);
		}
	}, [message]);

	const handleClick = () => {
		setVisible(false);

		// Kommer tömma cart om användaren klickar bort ShowMsg innan timeout
		if (forceEmptyCart) {
			emptyCart();
		}
	};

	if (!visible) return null;

	return (
		<section className='msg__box' onClick={handleClick}>
			<AnimatePresence>
				{visible && (
					<motion.p
						key='message'
						className={`${
							type === 'success'
								? 'success'
								: type === 'error'
								? 'error'
								: ''
						}`}
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 10 }}
						transition={{ duration: 0.3 }}>
						{text}
					</motion.p>
				)}
			</AnimatePresence>
		</section>
	);
}

export default ShowMsg;
