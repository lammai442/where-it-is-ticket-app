import './emptyEventsMsg.css';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { CiCirclePlus } from 'react-icons/ci';
function EmptyEventsMsg({ text }) {
	return (
		<>
			<Link
				className='link__order-page'
				to='/events'
				aria-label='Link to events page'>
				<section className='empty-events__box'>
					<p className='empty-events__msg'>
						Här ekar det tomt på {text}.
					</p>
					<Logo className='logo__empty-page' />
					<p className='empty-events__msg'>
						Ta mig till min nästa upplevelse!
					</p>
					<figure className='empty-events__circle-icon'>
						<CiCirclePlus className='empty-events__circle' />
					</figure>
				</section>
			</Link>
		</>
	);
}

export default EmptyEventsMsg;
