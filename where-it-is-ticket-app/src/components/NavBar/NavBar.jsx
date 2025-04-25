import NavItem from '../NavItem/NavItem';
import './navBar.css';
import { IoHome, IoTicketOutline } from 'react-icons/io5';
import { FaSearch } from 'react-icons/fa';
import { RiShoppingBasketFill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

function NavBar() {
	return (
		<nav>
			<ul className='nav__list'>
				<NavLink to='/' className='link'>
					{({ isActive }) => (
						<NavItem
							text={'Hem'}
							Icon={IoHome}
							isActive={isActive}
						/>
					)}
				</NavLink>
				<NavLink to='/events' className='link'>
					{({ isActive }) => (
						<NavItem
							text={'Sök'}
							Icon={FaSearch}
							isActive={isActive}
						/>
					)}
				</NavLink>
				<NavLink to='/order' className='link'>
					{({ isActive }) => (
						<NavItem
							text={'Order'}
							Icon={RiShoppingBasketFill}
							isActive={isActive}
						/>
					)}
				</NavLink>
				<NavLink to='/tickets' className='link'>
					{({ isActive }) => (
						<NavItem
							text={'Biljett'}
							Icon={IoTicketOutline}
							isActive={isActive}
						/>
					)}
				</NavLink>
			</ul>
		</nav>
	);
}

export default NavBar;
