import { STORIES } from '../constants/stories';

export interface IFetchStoriesPayload {
	type: keyof typeof STORIES,
	currentPage: number,
	pageSize: number
}