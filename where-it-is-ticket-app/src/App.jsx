import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import EventsPage from './pages/EventsPage/EventsPage';
import EventPage from './pages/EventPage/EventPage';
import OrderPage from './pages/OrderPage/OrderPage';
import TicketsPage from './pages/TicketsPage/TicketsPage';

function App() {
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
			path: '/event',
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
