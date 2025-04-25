import './navItem.css';
function NavItem({ text, Icon }) {
	return (
		<li className='nav__list-item'>
			{Icon && <Icon className='nav__icon' />}
			<p className='nav__title'>{text}</p>
		</li>
	);
}

export default NavItem;
