import CartCounter from '../CartCounter/CartCounter';
import './navItem.css';
import { useEffect } from 'react';
import useNotifyStore from '../../stores/useNotifyStore';
function NavItem({ text, Icon, isActive, cartCounter, notify }) {
	const { updateNotify } = useNotifyStore();

	useEffect(() => {
		// Kontrollera att notify inte redan är false
		if (text === 'Biljetter' && isActive && notify) {
			console.log('biljetter');
			updateNotify(false);
		}
	}, [text, isActive, notify, updateNotify]);

	return (
		<li className='nav__list-item'>
			{cartCounter && <CartCounter />}
			<figure className='nav__icon-box'>
				{Icon && (
					<Icon
						className={
							`nav__icon` +
							(isActive ? ' nav__icon--active' : '') +
							(notify ? ' notify' : '')
						}
					/>
				)}
			</figure>
			<p
				className={
					isActive ? 'nav__title nav__title--active' : 'nav__title'
				}>
				{text}
			</p>
		</li>
	);
}

export default NavItem;
