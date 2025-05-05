import './showMsg.css';
import { useState, useEffect } from 'react';
import Logo from '../../assets/logo/Logo.svg';

function ShowMsg({ type, text, message }) {
	const [visible, setVisible] = useState(null);

	useEffect(() => {
		setVisible(true);

		setTimeout(() => {
			setVisible(null);
		}, 2000);
	}, [message]);

	if (!visible) return null;

	return (
		<section className='msg__box' onClick={() => setVisible(null)}>
			{/* <img src={Logo} alt='Image of logo' className='msg__logo' /> */}
			<p
				className={`${
					type === 'success'
						? 'success'
						: type === 'error'
						? 'error'
						: ''
				}`}>
				{text}
			</p>
		</section>
	);
}

export default ShowMsg;
