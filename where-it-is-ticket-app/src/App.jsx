import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import EventsPage from './pages/EventsPage/EventsPage';
import EventPage from './pages/EventPage/EventPage';
import OrderPage from './pages/OrderPage/OrderPage';
import TicketsPage from './pages/TicketsPage/TicketsPage';
import { useFetch } from './hooks/useFetch';
import { useEffect } from 'react';
import useEventsStore from './stores/useEventsStore.js';

function App() {
	const { data } = useFetch('https://santosnr6.github.io/Data/events.json');
	const { setEvents } = useEventsStore();

	useEffect(() => {
		setEvents(data);
	}, [data]);

	const router = createBrowserRouter([
		{
			path: '/',
			element: (
				<>
					<HomePage />
				</>
			),
		},
		{
			path: '/events',
			element: (
				<>
					<EventsPage />
				</>
			),
		},
		{
			path: '/event/:id',
			element: (
				<>
					<EventPage />
				</>
			),
		},
		{
			path: '/order',
			element: (
				<>
					<OrderPage />
				</>
			),
		},
		{
			path: '/tickets',
			element: (
				<>
					<TicketsPage />
				</>
			),
		},
	]);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
