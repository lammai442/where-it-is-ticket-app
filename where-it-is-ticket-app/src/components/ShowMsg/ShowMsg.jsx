import './showMsg.css';
import { useState, useEffect } from 'react';
import Logo from '../../assets/logo/Logo.svg';
import { AnimatePresence, motion } from 'framer-motion';

function ShowMsg({ type, text, message }) {
	const [visible, setVisible] = useState(null);

	useEffect(() => {
		// setVisible(!visible);

		// setTimeout(() => {
		// 	setVisible(false);
		// }, 2000);

		if (message) {
			setVisible(true);

			const timeout = setTimeout(() => {
				setVisible(false);
			}, 2000);

			return () => clearTimeout(timeout); // rensa timeout om komponenten tas bort
		}
	}, [message]);

	if (!visible) return null;

	return (
		<section className='msg__box' onClick={() => setVisible(false)}>
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
