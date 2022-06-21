import { IJob } from '../../types/IJob';
import { JOBS_LIST_FAIL, JOBS_LIST_FETCH, JOBS_LIST_REQUEST, JOBS_LIST_SUCCESS } from '../types';

export const fetchJobsList = (payload: { pageSize: number; currentPage: number; }) => ({
	type: JOBS_LIST_FETCH,
	payload
});

export const jobsListRequest = () => ({
	type: JOBS_LIST_REQUEST
});

export const jobsListSuccess = (payload: { list: IJob[], totalCount: number }) => ({
	type: JOBS_LIST_SUCCESS,
	payload
});

export const jobsListFail = () => ({
	type: JOBS_LIST_FAIL
});