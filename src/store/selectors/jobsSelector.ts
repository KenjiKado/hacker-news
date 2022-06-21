import { useSelector } from 'react-redux';
import { IJob } from '../../types/IJob';
import { IState } from '../../types/IState';

type TJobsSelector = {
	list: IJob[];
	totalCount: number;
	loading: boolean;
}
export const useJobsSelector = () => useSelector<IState, TJobsSelector>(({ jobs: { list, loading, totalCount } }) => ({
	list,
	totalCount,
	loading
}));