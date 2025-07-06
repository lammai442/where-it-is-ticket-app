import { Link } from 'react-router-dom';
import './Header.css';
import { MdOutlineArrowBackIos } from 'react-icons/md';
function Header({ text, backBtn, linkTo, ticketHeader }) {
	return (
		<header className='header'>
			{backBtn && (
				<Link to={`/${linkTo}`} aria-label='Link to previous page'>
					<button
						className={
							ticketHeader
								? 'header__backBtn header__backBtn-ticket-page'
								: 'header__backBtn'
						}
						aria-label='Back button to previous page'>
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
