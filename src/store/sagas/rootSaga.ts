import { all, spawn } from 'redux-saga/effects';
import { saga as storiesListSaga } from './storiesSaga';
import { saga as jobsListSaga } from './jobsSaga';

const rootSaga = function* () {
	yield all([
		spawn(storiesListSaga),
		spawn(jobsListSaga)
	])
};
export default rootSaga;