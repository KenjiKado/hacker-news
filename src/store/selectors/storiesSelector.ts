import { useSelector } from 'react-redux';
import { IState } from '../../types/IState';
import { IStory } from '../../types/IStory';

type TStoriesSelector = {
	list: IStory[];
	totalCount: number;
	loading: boolean;
}

export const useStoriesSelector = () => useSelector<IState, TStoriesSelector>(({ stories: { list, totalCount, loading } }) => ({
	list,
	totalCount,
	loading
}));