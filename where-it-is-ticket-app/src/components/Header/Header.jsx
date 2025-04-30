import { Link } from 'react-router-dom';
import './header.css';
import { MdOutlineArrowBackIos } from 'react-icons/md';
function Header({ text, backBtn, linkTo, ticketHeader }) {
	return (
		<header className='header'>
			{backBtn && (
				<Link to={`/${linkTo}`}>
					<button
						className={
							ticketHeader
								? 'header__backBtn header__backBtn-ticket-page'
								: 'header__backBtn'
						}>
						<MdOutlineArrowBackIos />
					</button>
				</Link>
			)}
			<h1
				className={
					ticketHeader
						? 'header__title header__title-ticket-page'
						: 'header__title'
				}>
				{text}
			</h1>
		</header>
	);
}

export default Header;
