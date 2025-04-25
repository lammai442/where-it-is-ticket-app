import NavItem from '../NavItem/NavItem';
import './navBar.css';
import { IoHome, IoTicketOutline } from 'react-icons/io5';
import { FaSearch } from 'react-icons/fa';
import { RiShoppingBasketFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function NavBar() {
	return (
		<nav>
			<ul className='nav__list'>
				<Link to='/' className='link'>
					<NavItem text={'Hem'} Icon={IoHome} />
				</Link>
				<Link to='/events' className='link'>
					<NavItem text={'Sök'} Icon={FaSearch} />
				</Link>
				<Link to='/order' className='link'>
					<NavItem text={'Order'} Icon={RiShoppingBasketFill} />
				</Link>
				<Link to='/tickets' className='link'>
					<NavItem text={'Biljett'} Icon={IoTicketOutline} />
				</Link>
			</ul>
		</nav>
	);
}

export default NavBar;
