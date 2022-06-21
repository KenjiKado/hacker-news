import { AnyAction } from 'redux';
import { JOBS_LIST_FAIL, JOBS_LIST_REQUEST, JOBS_LIST_SUCCESS } from '../types';

const initialState = {
	list: [],
	totalCount: 0,
	loading: false
};

function reducer(state = initialState, action: AnyAction) {
	const { type, payload } = action;

	switch (type) {
		case JOBS_LIST_REQUEST:
			return {
				...state,
				loading: true
			};

		case JOBS_LIST_SUCCESS:
			return {
				...state,
				list: payload.list,
				totalCount: payload.totalCount,
				loading: false
			};

		case JOBS_LIST_FAIL:
			return initialState;

		default:
			return state;
	}
}

export default reducer;