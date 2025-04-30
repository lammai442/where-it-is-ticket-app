import { useEffect, useState } from 'react';
import './submitBtn.css';
function SubmitBtn({ text, onClick }) {
	const [animation, setAnimation] = useState(false);

	const handleClick = () => {
		setAnimation(true);
		onClick();
		const timer = setTimeout(() => {
			setAnimation(false);
		}, 300);
	};

	return (
		<button
			onClick={handleClick}
			className={`submit-btn ${
				animation ? 'submit-btn__animation' : ''
			}`}>
			{text}
		</button>
	);
}

export default SubmitBtn;
