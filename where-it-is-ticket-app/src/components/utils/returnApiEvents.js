import { useFetch } from '../../hooks/useFetch';
import useEventsStore from '../../stores/useEventsStore';

const returnApiEvents = () => {
	const { data } = useFetch('https://santosnr6.github.io/Data/events.json');
	const { setEvents } = useEventsStore();

	useEffect(() => {
		setEvents(data);
	}, [data]);
};

export default returnApiEvents;
