import Footer from '../../components/Footer/Footer';
import Logo from '../../components/Logo/Logo';
import './homePage.css';

function HomePage() {
	return (
		<div className='page'>
			<main className='main main__home-page'>
				<section className='hero'>
					<Logo />
					<h1 className='hero__title'>Where It's @</h1>
					<h2 className='hero__sub-title'>
						Boka biljetter på ett kick
					</h2>
				</section>
			</main>
			<Footer />
		</div>
	);
}

export default HomePage;
