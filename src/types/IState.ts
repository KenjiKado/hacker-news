import { IJob } from './IJob';
import { IStory } from './IStory';

export interface IState {
	stories: {
		list: IStory[],
		loading: boolean,
		totalCount: number,
	},
	jobs: {
		list: IJob[],
		loading: boolean,
		totalCount: number,
	}
}