import './navItem.css';

function NavItem({ text, Icon, isActive }) {
	return (
		<li className='nav__list-item'>
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
