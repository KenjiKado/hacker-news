import { AnyAction } from 'redux';
import { STORIES_LIST_FAIL, STORIES_LIST_REQUEST, STORIES_LIST_SUCCESS } from '../types';

const initialState = {
	list: [],
	loading: false,
	totalCount: 0,
};

function reducer(state = initialState, action: AnyAction) {
	const { type, payload } = action;

	switch (type) {
		case STORIES_LIST_REQUEST:
			return {
				...state,
				loading: true
			};

		case STORIES_LIST_SUCCESS:
			return {
				...state,
				list: payload.list,
				totalCount: payload.totalCount,
				loading: false,
			};

		case STORIES_LIST_FAIL:
			return {
				...state,
				list: [],
				loading: false,
			};

		default:
			return state;
	}
}

export default reducer;