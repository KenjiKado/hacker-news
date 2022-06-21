import { call, put, all, takeEvery } from '@redux-saga/core/effects';
import { SagaIterator } from '@redux-saga/types';
import { AnyAction } from 'redux';
import { API } from '../../constants/api';
import { callApi, getItemDetail } from '../../helpers/apiHelper';
import { getIndexList } from '../../helpers/listHelper';
import { IJob } from '../../types/IJob';
import { jobsListFail, jobsListRequest, jobsListSuccess } from '../actions/jobsActions';
import { JOBS_LIST_FETCH } from '../types';


function* getJobsListSaga(action: AnyAction): SagaIterator {
	const { currentPage, pageSize } = action.payload;

	try {
		yield put(jobsListRequest());

		const ids = yield call(callApi, { url: API.JOBS, method: 'GET' });
		const currentIdsList = getIndexList(ids, currentPage, pageSize);

		const list = yield all(currentIdsList.map((id: number) => {
			return call(getItemDetail, id);
		}));

		yield put(jobsListSuccess({ list: list.filter((job: IJob) => job && job), totalCount: ids.length }))

	} catch (e) {
		yield put(jobsListFail());
	}
}

export function* saga(): SagaIterator {
	yield takeEvery(JOBS_LIST_FETCH, getJobsListSaga);
}