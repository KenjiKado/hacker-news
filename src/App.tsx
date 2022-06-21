import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route
} from 'react-router-dom';
import { JOBS_ROUTE, STORIES_ROUTES } from './constants/routes';
import JobsPage from './pages/JobsPage';
import StoriesPage from './pages/StoriesPage';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				{
					STORIES_ROUTES.map((route, i) => (
						<Route
							key={i}
							path={route.path}
							element={
								<StoriesPage type={route.type} />
							}
						/>
					)
					)
				}
				<Route
					path={JOBS_ROUTE}
					element={
						<JobsPage />
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
