import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';
import PlantDetails from './PlantDetails';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/about',
		element: <About />,
	},
	{
		path: '/plants/:plantId',
		element: <PlantDetails />,
	},
]);

export default router;
