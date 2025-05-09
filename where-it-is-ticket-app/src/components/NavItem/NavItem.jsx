import CartCounter from '../CartCounter/CartCounter';
import './navItem.css';
import { useEffect } from 'react';
import useWiggleStore from '../../stores/useWiggleStore';
function NavItem({ text, Icon, isActive, cartCounter, wiggle }) {
	const { actionWiggle } = useWiggleStore();

	useEffect(() => {
		// Kontrollera att notify inte redan är false
		if (text === 'Biljetter' && isActive && wiggle) {
			// Vid false så kommer ikonen att sluta wiggle
			actionWiggle(false);
		}
	}, [text, isActive, wiggle, actionWiggle]);

	return (
		<li className='nav__list-item'>
			{cartCounter && <CartCounter />}
			<figure className='nav__icon-box'>
				{Icon && (
					<Icon
						className={
							`nav__icon` +
							(isActive ? ' nav__icon--active' : '') +
							(wiggle ? ' wiggle' : '')
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
