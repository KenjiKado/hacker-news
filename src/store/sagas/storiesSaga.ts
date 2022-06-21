import { SagaIterator } from '@redux-saga/types';
import { call, put, all, takeEvery } from '@redux-saga/core/effects';
import { AnyAction } from 'redux';
import { API } from '../../constants/api';
import { callApi, getItemDetail } from '../../helpers/apiHelper';
import { getIndexList } from '../../helpers/listHelper';
import { IFetchStoriesPayload } from '../../types/IFetchStoriesPayload';
import { IStory } from '../../types/IStory';
import { storiesListFail, storiesListRequest, storiesListSuccess } from '../actions/storiesActions';
import { STORIES_LIST_FETCH } from '../types';

interface IStoriesAction extends AnyAction {
	payload: IFetchStoriesPayload
}

function* getStoriesListSaga(action: IStoriesAction): SagaIterator {
	const { type, currentPage, pageSize } = action.payload;

	try {
		yield put(storiesListRequest());

		const ids = yield call(callApi, { url: API[type], method: 'GET' });
		const currentIdsList = getIndexList(ids, currentPage, pageSize);

		const list = yield all(currentIdsList.map((id: number) => {
			return call(getItemDetail, id);
		}));

		yield put(storiesListSuccess({ list: list.filter((story: IStory) => story && story), totalCount: ids.length }));
	} catch (error) {
		yield put(storiesListFail());
		console.error(error);
	}
}

export function* saga(): SagaIterator {
	yield takeEvery(STORIES_LIST_FETCH, getStoriesListSaga);
}