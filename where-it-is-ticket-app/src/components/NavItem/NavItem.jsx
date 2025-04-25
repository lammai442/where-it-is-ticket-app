import './navItem.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
function NavItem({ text, Icon }) {
	const [isActive, setIsActive] = useState('false');
	const { url } = useParams();

	useEffect(() => {
		setIsActive(url);
		console.log(isActive);
	}, [url]);

	return (
		<li className='nav__list-item'>
			<figure className='nav__icon-box'>
				{Icon && <Icon className='nav__icon' />}
			</figure>
			<p className='nav__title'>{text}</p>
		</li>
	);
}

export default NavItem;
