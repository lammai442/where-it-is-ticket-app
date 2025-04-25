import Footer from '../../components/Footer/Footer';
import './homePage.css';
import Logo from '../../assets/logo/logo.svg';

function HomePage() {
	return (
		<div className='page'>
			<main className='main'>
				<section className='hero'>
					<img className='hero__logo' src={Logo} alt='Logo image' />
					<h1 className='hero__title'>Where It's @</h1>
					<h2 className='hero__sub-title'>Ticketing made easy</h2>
				</section>
			</main>
			<Footer />
		</div>
	);
}

export default HomePage;
