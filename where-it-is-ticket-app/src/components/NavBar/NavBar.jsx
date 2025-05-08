import NavItem from '../NavItem/NavItem';
import './navBar.css';
import { IoHome, IoTicketOutline } from 'react-icons/io5';
import { FaSearch } from 'react-icons/fa';
import { RiShoppingBasketFill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
// import useNotifyStore from '../../stores/useNotifyStore';
import useWiggleStore from '../../stores/useWiggleStore';

function NavBar() {
	// const { notify } = useNotifyStore();
	const { wiggle } = useWiggleStore();
	return (
		<nav>
			<ul className='nav__list'>
				<NavLink to='/' className='link link__nav-bar'>
					{({ isActive }) => (
						<NavItem
							text={'Hem'}
							Icon={IoHome}
							isActive={isActive}
						/>
					)}
				</NavLink>
				<NavLink to='/events' className='link link__nav-bar'>
					{({ isActive }) => (
						<NavItem
							text={'Events'}
							Icon={FaSearch}
							isActive={isActive}
						/>
					)}
				</NavLink>
				<NavLink to='/order' className='link link__nav-bar'>
					{({ isActive }) => (
						<NavItem
							text={'Order'}
							Icon={RiShoppingBasketFill}
							isActive={isActive}
							cartCounter={true}
						/>
					)}
				</NavLink>
				<NavLink to='/tickets' className='link link__nav-bar'>
					{({ isActive }) => (
						<NavItem
							text={'Biljetter'}
							Icon={IoTicketOutline}
							isActive={isActive}
							wiggle={wiggle}
						/>
					)}
				</NavLink>
			</ul>
		</nav>
	);
}

export default NavBar;
