import { STORIES } from './stories';

export const STORIES_ROUTES = [
	{
		path: '/',
		type: STORIES.TOP_STORIES
	},
	{
		path: '/new',
		type: STORIES.NEW_STORIES
	},
	{
		path: '/best',
		type: STORIES.BEST_STORIES
	}
];

export const JOBS_ROUTE = '/jobs';