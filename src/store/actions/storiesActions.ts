import { STORIES } from '../../constants/stories';
import { IStory } from '../../types/IStory';
import { STORIES_LIST_FAIL, STORIES_LIST_FETCH, STORIES_LIST_REQUEST, STORIES_LIST_SUCCESS } from '../types';

export const fetchStoriesList = (payload: { pageSize: number; currentPage: number; type: keyof typeof STORIES }) => ({
	type: STORIES_LIST_FETCH,
	payload
});

export const storiesListRequest = () => ({
	type: STORIES_LIST_REQUEST
});

export const storiesListSuccess = (payload: { list: IStory[], totalCount: number }) => ({
	type: STORIES_LIST_SUCCESS,
	payload
});

export const storiesListFail = () => ({
	type: STORIES_LIST_FAIL
});
