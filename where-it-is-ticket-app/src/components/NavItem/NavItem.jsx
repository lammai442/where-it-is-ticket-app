import CartCounter from '../CartCounter/CartCounter';
import './navItem.css';

function NavItem({ text, Icon, isActive, cartCounter }) {
	return (
		<li className='nav__list-item'>
			{cartCounter && <CartCounter />}
			<figure className='nav__icon-box'>
				{Icon && (
					<Icon
						className={
							isActive
								? 'nav__icon nav__icon--active'
								: 'nav__icon'
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
