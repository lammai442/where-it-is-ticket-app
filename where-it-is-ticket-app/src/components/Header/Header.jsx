import { Link } from 'react-router-dom';
import './header.css';
import { MdOutlineArrowBackIos } from 'react-icons/md';
function Header({ text, backBtn }) {
	return (
		<header className='header'>
			{backBtn && (
				<Link to='/events'>
					<button className='header__backBtn'>
						<MdOutlineArrowBackIos />
					</button>
				</Link>
			)}
			<h1 className='header__title'>{text}</h1>
		</header>
	);
}

export default Header;
